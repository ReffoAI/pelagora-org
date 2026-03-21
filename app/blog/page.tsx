import Link from "next/link";
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

async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = createSupabaseClient();
  if (!supabase) {
    return [
      {
        id: "sample-published-1",
        title: "Building your first beacon node in 10 minutes",
        slug: "building-your-first-beacon-node-10-minutes",
        content: "## Published\n\nThis is a published sample post visible on pelagora.org/blog.",
        image_url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        published_at: new Date().toISOString(),
      },
    ];
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
              const snippet = post.content.replace(/\s+/g, " ").slice(0, 180);
              return (
                <article key={post.id} className="post-card">
                  {post.image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image_url} alt="" className="post-card-img" />
                  )}
                  <div className="post-card-body">
                    <div className="post-date">
                      {post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Upcoming"}
                    </div>
                    <h2>
                      <Link href={`/blog/${slug}`}>{post.title}</Link>
                    </h2>
                    <p className="post-excerpt">{snippet}{post.content.length > 180 ? "…" : ""}</p>
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
