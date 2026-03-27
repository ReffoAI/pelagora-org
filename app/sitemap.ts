import type { MetadataRoute } from "next";
import { createSupabaseClient } from "@/lib/supabase";
import { slugifyBlogTitle } from "@/lib/blog-slug";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/build`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contribute`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/ai-skill`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/buy-or-sell`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/brand`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Fetch published blog posts from Supabase
  const supabase = createSupabaseClient();

  if (!supabase) {
    return staticPages;
  }

  try {
    const { data: posts } = await supabase
      .from("pelagora_blog_posts")
      .select("slug, title, published_at, updated_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    const blogPages: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
      url: `${siteUrl}/blog/${post.slug || slugifyBlogTitle(post.title)}`,
      lastModified: post.updated_at
        ? new Date(post.updated_at)
        : post.published_at
          ? new Date(post.published_at)
          : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
  } catch {
    return staticPages;
  }
}
