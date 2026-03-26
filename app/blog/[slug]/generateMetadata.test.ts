/**
 * Tests for generateMetadata() in app/blog/[slug]/page.tsx
 *
 * Strategy: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are
 * intentionally not set, so createSupabaseClient() returns null and the code
 * falls back to MOCK_POSTS. This lets us drive all the interesting branches
 * without standing up a database or mocking Supabase internals.
 */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { generateMetadata } from "./page";
import { MOCK_POSTS } from "@/lib/mock-blog-posts";

// Wrap the string slug in a Promise<{ slug }> to match the Next.js 15+ params shape.
function makeParams(slug: string): Promise<{ slug: string }> {
  return Promise.resolve({ slug });
}

describe("generateMetadata — blog/[slug]", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  beforeEach(() => {
    // Ensure supabase env vars are absent so mock-posts path is used.
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  });

  afterEach(() => {
    // Restore NEXT_PUBLIC_SITE_URL to its pre-test value.
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    }
  });

  // -------------------------------------------------------------------------
  // Post-not-found branch
  // -------------------------------------------------------------------------

  it("returns a 404 title when the slug does not match any post", async () => {
    const result = await generateMetadata({ params: makeParams("this-slug-does-not-exist") });
    expect(result.title).toBe("Post Not Found — Pelagora Blog");
    // Should not include openGraph or twitter keys when post is missing.
    expect((result as Record<string, unknown>).openGraph).toBeUndefined();
  });

  // -------------------------------------------------------------------------
  // Happy path — post has an image_url
  // -------------------------------------------------------------------------

  it("uses post.image_url as the og:image when it is present", async () => {
    // Pick the first mock post, which has a known image_url.
    const post = MOCK_POSTS[0];
    expect(post.image_url).not.toBeNull();

    const result = await generateMetadata({ params: makeParams(post.slug) });

    expect(result.openGraph).toBeDefined();
    expect(result.openGraph!.images).toEqual([{ url: post.image_url }]);
    expect(result.twitter!.images).toEqual([post.image_url]);
  });

  it("sets the page title to '<post title> — Pelagora Blog'", async () => {
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect(result.title).toBe(`${post.title} — Pelagora Blog`);
  });

  it("sets og:url to <siteUrl>/blog/<slug>", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect(result.openGraph!.url).toBe(`https://example.com/blog/${post.slug}`);
  });

  it("sets og:type to 'article'", async () => {
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect(result.openGraph!.type).toBe("article");
  });

  it("sets twitter:card to 'summary_large_image'", async () => {
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect(result.twitter!.card).toBe("summary_large_image");
  });

  // -------------------------------------------------------------------------
  // Fallback image — post exists but image_url is null
  // -------------------------------------------------------------------------

  it("falls back to pelagora-og.jpg when post.image_url is null", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://pelagora.org";

    // Temporarily patch MOCK_POSTS[0] to have a null image_url.
    const post = MOCK_POSTS[0];
    const originalImageUrl = post.image_url;
    // Cast to any so we can mutate a readonly-in-practice field for test isolation.
    (post as { image_url: string | null }).image_url = null;

    try {
      const result = await generateMetadata({ params: makeParams(post.slug) });
      const expectedFallback = "https://pelagora.org/images/pelagora-og.jpg";
      expect(result.openGraph!.images).toEqual([{ url: expectedFallback }]);
      expect(result.twitter!.images).toEqual([expectedFallback]);
    } finally {
      (post as { image_url: string | null }).image_url = originalImageUrl;
    }
  });

  // -------------------------------------------------------------------------
  // NEXT_PUBLIC_SITE_URL fallback
  // -------------------------------------------------------------------------

  it("defaults siteUrl to https://pelagora.org when NEXT_PUBLIC_SITE_URL is unset", async () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    const post = MOCK_POSTS[0];
    const originalImageUrl = post.image_url;
    (post as { image_url: string | null }).image_url = null;

    try {
      const result = await generateMetadata({ params: makeParams(post.slug) });
      expect(result.openGraph!.images).toEqual([
        { url: "https://pelagora.org/images/pelagora-og.jpg" },
      ]);
      expect(result.openGraph!.url).toContain("https://pelagora.org/blog/");
    } finally {
      (post as { image_url: string | null }).image_url = originalImageUrl;
    }
  });

  // -------------------------------------------------------------------------
  // Description extraction — markdown stripped to plain text, capped at 160 chars
  // -------------------------------------------------------------------------

  it("strips markdown from the post content to produce the og:description", async () => {
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });

    const description = result.description as string;
    // Should not contain markdown headings
    expect(description).not.toMatch(/^#{1,6}\s/m);
    // Should not contain raw markdown link syntax
    expect(description).not.toMatch(/\[.*\]\(.*\)/);
    // Should not exceed 160 characters
    expect(description.length).toBeLessThanOrEqual(160);
    // Should be non-empty
    expect(description.trim().length).toBeGreaterThan(0);
  });

  it("og:description matches the top-level description field", async () => {
    const post = MOCK_POSTS[0];
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect(result.openGraph!.description).toBe(result.description);
    expect(result.twitter!.description).toBe(result.description);
  });

  // -------------------------------------------------------------------------
  // publishedTime — only present when post.published_at is set
  // -------------------------------------------------------------------------

  it("includes publishedTime in openGraph when the post has a published_at date", async () => {
    const post = MOCK_POSTS[0];
    expect(post.published_at).not.toBeNull();
    const result = await generateMetadata({ params: makeParams(post.slug) });
    expect((result.openGraph as Record<string, unknown>).publishedTime).toBe(post.published_at);
  });
});
