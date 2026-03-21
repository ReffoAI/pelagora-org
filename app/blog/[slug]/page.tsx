import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { createSupabaseClient } from "@/lib/supabase";
import { slugifyBlogTitle } from "@/lib/blog-slug";

type BlogPost = {
  id: string;
  title: string;
  slug: string | null;
  content: string;
  image_url: string | null;
  published_at: string | null;
};

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createSupabaseClient();
  if (!supabase) {
    const sample: BlogPost = {
      id: "sample-published-1",
      title: "Building your first beacon node in 10 minutes",
      slug: "building-your-first-beacon-node-10-minutes",
      content: "## Published\n\nThis is a published sample post visible on pelagora.org/blog.",
      image_url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
      published_at: new Date().toISOString(),
    };
    return sample.slug === slug ? sample : null;
  }

  const { data: bySlug } = await supabase
    .from("pelagora_blog_posts")
    .select("id,title,slug,content,image_url,published_at")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (bySlug) return bySlug as BlogPost;

  const { data } = await supabase
    .from("pelagora_blog_posts")
    .select("id,title,slug,content,image_url,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  const match = (data || []).find((post) => slugifyBlogTitle(post.title) === slug);
  return (match as BlogPost) || null;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
      {post.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.image_url} alt="" className="post-hero-img" />
      )}
      <div className="post-detail">
        <div className="container">
          <Link href="/blog" className="post-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="post-meta">
            <time>{post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Unpublished"}</time>
          </div>
          <h1>{post.title}</h1>
          <article className="prose">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </main>
  );
}
