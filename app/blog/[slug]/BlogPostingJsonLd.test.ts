/**
 * Tests for BlogPostingJsonLd component.
 *
 * Strategy: since BlogPostingJsonLd is a pure function component with no hooks
 * or client-side state, we call it directly and inspect the returned React
 * element's props to extract the JSON-LD payload. This avoids needing a DOM
 * environment and keeps the tests fast.
 */

import { describe, it, expect } from "vitest";
import { BlogPostingJsonLd } from "./BlogPostingJsonLd";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type BlogPost = {
  title: string;
  slug: string | null;
  content: string;
  image_url: string | null;
  og_image_url: string | null;
  published_at: string | null;
};

const SITE_URL = "https://pelagora.org";

function makePost(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    title: "Understanding Decentralized Commerce",
    slug: "understanding-decentralized-commerce",
    content:
      "## Introduction\n\nDecentralized commerce removes the middleman. " +
      "Buyers and sellers connect **directly** through open protocols.\n\n" +
      "This is the [future of trade](https://example.com).",
    image_url: "https://cdn.example.com/hero.jpg",
    og_image_url: null,
    published_at: "2026-03-15T12:00:00Z",
    ...overrides,
  };
}

/** Calls the component as a function and parses the JSON-LD from the script tag props. */
function getJsonLd(post: BlogPost, siteUrl: string = SITE_URL): Record<string, unknown> {
  const element = BlogPostingJsonLd({ post, siteUrl }) as unknown as {
    props: { dangerouslySetInnerHTML: { __html: string } };
  };
  return JSON.parse(element.props.dangerouslySetInnerHTML.__html);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("BlogPostingJsonLd", () => {
  // -------------------------------------------------------------------------
  // Happy path — all fields present
  // -------------------------------------------------------------------------

  it("renders valid JSON-LD with all required schema.org fields", () => {
    const post = makePost();
    const ld = getJsonLd(post);

    expect(ld["@context"]).toBe("https://schema.org");
    expect(ld["@type"]).toBe("BlogPosting");
    expect(ld.headline).toBe(post.title);
    expect(ld.image).toBeDefined();
    expect(ld.wordCount).toBeTypeOf("number");
    expect(ld.description).toBeTypeOf("string");
    expect(ld.datePublished).toBe(post.published_at);
    expect(ld.dateModified).toBe(post.published_at);

    // Author
    const author = ld.author as Record<string, unknown>;
    expect(author["@type"]).toBe("Organization");
    expect(author.name).toBe("Pelagora");

    // Publisher
    const publisher = ld.publisher as Record<string, unknown>;
    expect(publisher["@type"]).toBe("Organization");
    expect(publisher.name).toBe("Pelagora");
    const logo = publisher.logo as Record<string, unknown>;
    expect(logo["@type"]).toBe("ImageObject");
    expect(logo.url).toBe(`${SITE_URL}/images/pelagora-og.jpg`);

    // mainEntityOfPage
    const mainEntity = ld.mainEntityOfPage as Record<string, unknown>;
    expect(mainEntity["@type"]).toBe("WebPage");
    expect(mainEntity["@id"]).toBe(`${SITE_URL}/blog/${post.slug}`);
  });

  it("headline matches the post title", () => {
    const post = makePost({ title: "Why Open Protocols Matter" });
    const ld = getJsonLd(post);
    expect(ld.headline).toBe("Why Open Protocols Matter");
  });

  // -------------------------------------------------------------------------
  // Word count
  // -------------------------------------------------------------------------

  it("calculates wordCount from the plain-text content after stripping markdown", () => {
    // The content in makePost() has markdown syntax. After stripping:
    //   "Introduction Decentralized commerce removes the middleman. Buyers and
    //    sellers connect directly through open protocols. This is the future of trade."
    // That's roughly 18 words. We test it's a positive number in a reasonable range
    // rather than hardcoding an exact count, to avoid coupling to stripMarkdown internals.
    const post = makePost();
    const ld = getJsonLd(post);
    expect(ld.wordCount).toBeGreaterThan(10);
    expect(ld.wordCount).toBeLessThan(50);
  });

  it("returns zero wordCount for empty content", () => {
    const post = makePost({ content: "" });
    const ld = getJsonLd(post);
    expect(ld.wordCount).toBe(0);
  });

  it("counts words correctly for content with no markdown", () => {
    const post = makePost({ content: "one two three four five" });
    const ld = getJsonLd(post);
    expect(ld.wordCount).toBe(5);
  });

  // -------------------------------------------------------------------------
  // Missing published_at — no datePublished / dateModified
  // -------------------------------------------------------------------------

  it("omits datePublished and dateModified when published_at is null", () => {
    const post = makePost({ published_at: null });
    const ld = getJsonLd(post);
    expect(ld.datePublished).toBeUndefined();
    expect(ld.dateModified).toBeUndefined();
  });

  it("includes datePublished and dateModified when published_at is set", () => {
    const post = makePost({ published_at: "2026-01-01T00:00:00Z" });
    const ld = getJsonLd(post);
    expect(ld.datePublished).toBe("2026-01-01T00:00:00Z");
    expect(ld.dateModified).toBe("2026-01-01T00:00:00Z");
  });

  // -------------------------------------------------------------------------
  // Image fallback logic
  // -------------------------------------------------------------------------

  it("uses og_image_url when it is present", () => {
    const post = makePost({
      og_image_url: "https://cdn.example.com/og-specific.jpg",
      image_url: "https://cdn.example.com/hero.jpg",
    });
    const ld = getJsonLd(post);
    expect(ld.image).toBe("https://cdn.example.com/og-specific.jpg");
  });

  it("falls back to image_url when og_image_url is null", () => {
    const post = makePost({
      og_image_url: null,
      image_url: "https://cdn.example.com/hero.jpg",
    });
    const ld = getJsonLd(post);
    expect(ld.image).toBe("https://cdn.example.com/hero.jpg");
  });

  it("falls back to the default site OG image when both image fields are null", () => {
    const post = makePost({ og_image_url: null, image_url: null });
    const ld = getJsonLd(post);
    expect(ld.image).toBe(`${SITE_URL}/images/pelagora-og.jpg`);
  });

  // -------------------------------------------------------------------------
  // Description
  // -------------------------------------------------------------------------

  it("truncates the description to 160 characters", () => {
    const longContent = "word ".repeat(200); // 1000 chars
    const post = makePost({ content: longContent });
    const ld = getJsonLd(post);
    expect((ld.description as string).length).toBeLessThanOrEqual(160);
  });

  // -------------------------------------------------------------------------
  // siteUrl propagation
  // -------------------------------------------------------------------------

  it("uses the provided siteUrl in all URL fields", () => {
    const post = makePost({ og_image_url: null, image_url: null });
    const customUrl = "https://custom.example.com";
    const ld = getJsonLd(post, customUrl);

    const mainEntity = ld.mainEntityOfPage as Record<string, unknown>;
    expect(mainEntity["@id"]).toBe(`${customUrl}/blog/${post.slug}`);
    expect(ld.image).toBe(`${customUrl}/images/pelagora-og.jpg`);

    const author = ld.author as Record<string, unknown>;
    expect(author.url).toBe(customUrl);

    const publisher = ld.publisher as Record<string, unknown>;
    expect(publisher.url).toBe(customUrl);
  });
});
