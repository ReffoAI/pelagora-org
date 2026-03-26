import Link from "next/link";
import { createSupabaseClient } from "@/lib/supabase";
import { slugifyBlogTitle } from "@/lib/blog-slug";
import { MOCK_POSTS } from "@/lib/mock-blog-posts";
import { stripMarkdown } from "@/lib/strip-markdown";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  title: "Pelagora Blog",
  description: "Announcements, tutorials, and ideas from the Pelagora community.",
  openGraph: {
    title: "Pelagora Blog",
    description: "Announcements, tutorials, and ideas from the Pelagora community.",
    url: `${siteUrl}/blog`,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/pelagora-og.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelagora Blog",
    description: "Announcements, tutorials, and ideas from the Pelagora community.",
    images: [`${siteUrl}/images/pelagora-og.jpg`],
  },
};

type BlogPost = {
  id: string;
  title: string;
  slug: string | null;
  content: string;
  image_url: string | null;
  published_at: string | null;
};

async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = createSupabaseClient();
  if (!supabase) {
    return MOCK_POSTS;
  }

  const { data } = await supabase
    .from("pelagora_blog_posts")
    .select("id,title,slug,content,image_url,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  return (data || []) as BlogPost[];
}


export default async function BlogListPage() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <div className="blog-header">
        <div className="container">
          <div className="section-label">From the team</div>
          <h1 className="section-title">Pelagora Blog</h1>
          <p className="section-desc">Announcements, tutorials, and ideas from the community.</p>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 60, paddingBottom: 100 }}>
        {posts.length === 0 ? (
          <p style={{ color: "var(--slate)" }}>No published blog posts yet.</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => {
              const slug = post.slug || slugifyBlogTitle(post.title);
              const snippet = stripMarkdown(post.content).slice(0, 180);
              return (
                <article key={post.id} className="post-card">
                  {post.image_url && (
                    <Link href={`/blog/${slug}`} tabIndex={-1} aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.image_url} alt="" className="post-card-img" />
                    </Link>
                  )}
                  <div className="post-card-body">
                    <div className="post-date">
                      {post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Upcoming"}
                    </div>
                    <h2>
                      <Link href={`/blog/${slug}`}>{post.title}</Link>
                    </h2>
                    <p className="post-excerpt">{snippet}{post.content.length > 180 ? "…" : ""}</p>
                    <Link href={`/blog/${slug}`} className="post-read-more">
                      Read more
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
