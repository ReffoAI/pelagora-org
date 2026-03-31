import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { createSupabaseClient } from "@/lib/supabase";
import { slugifyBlogTitle } from "@/lib/blog-slug";
import { MOCK_POSTS } from "@/lib/mock-blog-posts";
import { stripMarkdown } from "@/lib/strip-markdown";
import ShareBar from "./ShareBar";
import { PageTracker } from "@/components/PageTracker";

export const revalidate = 300; // re-fetch every 5 minutes

type BlogPost = {
  id: string;
  title: string;
  slug: string | null;
  content: string;
  image_url: string | null;
  og_image_url: string | null;
  published_at: string | null;
};

type AdjacentPosts = {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

async function getPostBySlug(slug: string): Promise<{ post: BlogPost | null; adjacent: AdjacentPosts }> {
  const supabase = createSupabaseClient();

  if (!supabase) {
    const idx = MOCK_POSTS.findIndex((p) => p.slug === slug);
    const post = idx !== -1 ? MOCK_POSTS[idx] : null;
    // MOCK_POSTS sorted newest-first, so prev = older (higher index), next = newer (lower index)
    const prevPost = idx !== -1 && idx + 1 < MOCK_POSTS.length ? MOCK_POSTS[idx + 1] : null;
    const nextPost = idx > 0 ? MOCK_POSTS[idx - 1] : null;
    return {
      post,
      adjacent: {
        prev: prevPost ? { slug: prevPost.slug, title: prevPost.title } : null,
        next: nextPost ? { slug: nextPost.slug, title: nextPost.title } : null,
      },
    };
  }

  const { data: bySlug } = await supabase
    .from("pelagora_blog_posts")
    .select("id,title,slug,content,image_url,og_image_url,published_at")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  let post = bySlug as BlogPost | null;

  if (!post) {
    const { data: all } = await supabase
      .from("pelagora_blog_posts")
      .select("id,title,slug,content,image_url,og_image_url,published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });
    const match = (all || []).find((p) => slugifyBlogTitle(p.title) === slug);
    post = (match as BlogPost) || null;
  }

  if (!post) return { post: null, adjacent: { prev: null, next: null } };

  // Fetch all posts sorted newest-first to find neighbors
  const { data: allPosts } = await supabase
    .from("pelagora_blog_posts")
    .select("id,title,slug,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  const posts = allPosts || [];
  const idx = posts.findIndex((p) => p.id === post!.id);
  const prevPost = idx !== -1 && idx + 1 < posts.length ? posts[idx + 1] : null;
  const nextPost = idx > 0 ? posts[idx - 1] : null;

  return {
    post,
    adjacent: {
      prev: prevPost ? { slug: prevPost.slug || slugifyBlogTitle(prevPost.title), title: prevPost.title } : null,
      next: nextPost ? { slug: nextPost.slug || slugifyBlogTitle(nextPost.title), title: nextPost.title } : null,
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";
  const fallbackImage = `${siteUrl}/images/pelagora-og.jpg`;

  if (!post) {
    return { title: "Post Not Found — Pelagora Blog" };
  }

  const ogImage = post.og_image_url ?? post.image_url ?? fallbackImage;
  const url = `${siteUrl}/blog/${slug}`;
  const description = stripMarkdown(post.content).slice(0, 160);

  return {
    title: `${post.title} — Pelagora Blog`,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: "Pelagora",
      images: [{ url: ogImage }],
      type: "article",
      ...(post.published_at ? { publishedTime: post.published_at } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, adjacent } = await getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <div className="container" style={{ paddingTop: 120, paddingBottom: 100 }}>
          <Link href="/blog" className="post-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 style={{ fontFamily: "var(--font-display)", marginTop: 32 }}>Post not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageTracker event="blog_post_viewed" props={{ slug, title: post.title }} />
      {post.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.image_url} alt="" className="post-hero-img" />
      )}
      <div className="post-detail">
        <div className="container">
          <div className="post-detail-layout">
            <div className="post-content">
              <Link href="/blog" className="post-back">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <div className="post-meta">
                <h1>{post.title}</h1>
                <time>Published on: {post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Unpublished"}</time>
              </div>
              <ShareBar title={post.title} variant="inline" />
              <article className="prose">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </article>

              {(adjacent.prev || adjacent.next) && (
                <div className="post-pagination">
                  {adjacent.prev ? (
                    <Link href={`/blog/${adjacent.prev.slug}`} className="post-pagination-item">
                      <span className="post-pagination-label">
                        <svg viewBox="0 0 24 24"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                        Previous
                      </span>
                      <span className="post-pagination-title">{adjacent.prev.title}</span>
                    </Link>
                  ) : <div />}
                  {adjacent.next ? (
                    <Link href={`/blog/${adjacent.next.slug}`} className="post-pagination-item next">
                      <span className="post-pagination-label">
                        Next
                        <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                      </span>
                      <span className="post-pagination-title">{adjacent.next.title}</span>
                    </Link>
                  ) : <div />}
                </div>
              )}
            </div>
            <ShareBar title={post.title} />
          </div>
        </div>
      </div>
    </main>
  );
}
