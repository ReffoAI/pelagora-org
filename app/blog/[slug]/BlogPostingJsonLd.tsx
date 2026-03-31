import { stripMarkdown } from "@/lib/strip-markdown";

type BlogPost = {
  title: string;
  slug: string | null;
  content: string;
  image_url: string | null;
  og_image_url: string | null;
  published_at: string | null;
};

export function BlogPostingJsonLd({
  post,
  siteUrl,
}: {
  post: BlogPost;
  siteUrl: string;
}) {
  const plainText = stripMarkdown(post.content);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const url = `${siteUrl}/blog/${post.slug}`;
  const image = post.og_image_url ?? post.image_url ?? `${siteUrl}/images/pelagora-og.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    image,
    wordCount,
    author: {
      "@type": "Organization",
      name: "Pelagora",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Pelagora",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/pelagora-og.jpg`,
      },
    },
    ...(post.published_at
      ? {
          datePublished: post.published_at,
          dateModified: post.published_at,
        }
      : {}),
    description: plainText.slice(0, 160),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
