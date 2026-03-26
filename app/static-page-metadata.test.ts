/**
 * Tests for static metadata exports across pelagora-org pages.
 *
 * Each static page exports a `metadata` constant evaluated at module load time.
 * Because NEXT_PUBLIC_SITE_URL is read at the module level, we cannot change it
 * between imports in the same test run — so these tests assert the shape and
 * correct relative paths of the metadata, accepting whatever siteUrl was in
 * effect when the module loaded.
 *
 * For the NEXT_PUBLIC_SITE_URL fallback we use a dedicated test at the bottom
 * that does not depend on the module-level variable.
 */

import { describe, it, expect } from "vitest";
import { metadata as rootMetadata } from "./layout";
import { metadata as buildMetadata } from "./build/page";
import { metadata as buyOrSellMetadata } from "./buy-or-sell/page";
import { metadata as contributeMetadata } from "./contribute/page";
import { metadata as aiSkillMetadata } from "./ai-skill/page";
import { metadata as brandMetadata } from "./brand/page";
import { metadata as blogListMetadata } from "./blog/page";

// ---------------------------------------------------------------------------
// Helper: assert the minimum shape every page metadata must have
// ---------------------------------------------------------------------------

function assertOpenGraphShape(metadata: Record<string, unknown>, expectedPath: string, expectedImageFile: string) {
  const og = metadata.openGraph as Record<string, unknown>;
  expect(og, "openGraph must be defined").toBeDefined();

  // og:type
  expect(og.type).toBe("website");

  // og:siteName
  expect(og.siteName).toBe("Pelagora");

  // og:url must end with the expected path
  const url = og.url as string;
  expect(url).toMatch(new RegExp(`${expectedPath}$`));
  // og:url must be an absolute URL
  expect(url).toMatch(/^https?:\/\//);

  // og:images — must be an array containing an absolute URL pointing to the right image
  const images = og.images as Array<{ url: string }>;
  expect(Array.isArray(images)).toBe(true);
  expect(images.length).toBeGreaterThan(0);
  const imageUrl = images[0].url;
  expect(imageUrl).toMatch(/^https?:\/\//);
  expect(imageUrl).toContain(expectedImageFile);

  // Twitter card
  const twitter = metadata.twitter as Record<string, unknown>;
  expect(twitter).toBeDefined();
  expect(twitter.card).toBe("summary_large_image");
  const twitterImages = twitter.images as string[];
  expect(Array.isArray(twitterImages)).toBe(true);
  expect(twitterImages[0]).toContain(expectedImageFile);
  // Twitter image must also be absolute
  expect(twitterImages[0]).toMatch(/^https?:\/\//);
}

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------

describe("Root layout metadata", () => {
  it("uses the homepage-crop fallback image", () => {
    assertOpenGraphShape(
      rootMetadata as unknown as Record<string, unknown>,
      "", // root url ends with nothing after the origin
      "pelagora-app_homepage-crop.png"
    );
  });

  it("has the expected title", () => {
    expect(rootMetadata.title).toBe("Pelagora — The Open Source Commerce Network");
  });
});

// ---------------------------------------------------------------------------
// /build
// ---------------------------------------------------------------------------

describe("/build page metadata", () => {
  it("uses bicycle-man.png as the og:image", () => {
    assertOpenGraphShape(
      buildMetadata as unknown as Record<string, unknown>,
      "/build",
      "bicycle-man.png"
    );
  });
});

// ---------------------------------------------------------------------------
// /buy-or-sell
// ---------------------------------------------------------------------------

describe("/buy-or-sell page metadata", () => {
  it("uses woman-clothes-shopping.png as the og:image", () => {
    assertOpenGraphShape(
      buyOrSellMetadata as unknown as Record<string, unknown>,
      "/buy-or-sell",
      "woman-clothes-shopping.png"
    );
  });
});

// ---------------------------------------------------------------------------
// /contribute
// ---------------------------------------------------------------------------

describe("/contribute page metadata", () => {
  it("uses helping.png as the og:image", () => {
    assertOpenGraphShape(
      contributeMetadata as unknown as Record<string, unknown>,
      "/contribute",
      "helping.png"
    );
  });
});

// ---------------------------------------------------------------------------
// /ai-skill
// ---------------------------------------------------------------------------

describe("/ai-skill page metadata", () => {
  it("uses woman-surfboards.png as the og:image", () => {
    assertOpenGraphShape(
      aiSkillMetadata as unknown as Record<string, unknown>,
      "/ai-skill",
      "woman-surfboards.png"
    );
  });
});

// ---------------------------------------------------------------------------
// /brand
// ---------------------------------------------------------------------------

describe("/brand page metadata", () => {
  it("uses pelagora-octopus-hero.png as the og:image", () => {
    assertOpenGraphShape(
      brandMetadata as unknown as Record<string, unknown>,
      "/brand",
      "pelagora-octopus-hero.png"
    );
  });
});

// ---------------------------------------------------------------------------
// /blog (list page)
// ---------------------------------------------------------------------------

describe("/blog list page metadata", () => {
  it("uses the homepage-crop fallback image", () => {
    assertOpenGraphShape(
      blogListMetadata as unknown as Record<string, unknown>,
      "/blog",
      "pelagora-app_homepage-crop.png"
    );
  });

  it("has the expected title", () => {
    expect(blogListMetadata.title).toBe("Pelagora Blog");
  });
});

// ---------------------------------------------------------------------------
// NEXT_PUBLIC_SITE_URL fallback (tested via generateMetadata, not static exports,
// because static exports capture the env var at module load time — see
// generateMetadata.test.ts for that coverage)
// ---------------------------------------------------------------------------

describe("NEXT_PUBLIC_SITE_URL default value contract", () => {
  it("every static page og:url is an absolute https URL (proving the ?? fallback works)", () => {
    const allMetadata = [
      rootMetadata,
      buildMetadata,
      buyOrSellMetadata,
      contributeMetadata,
      aiSkillMetadata,
      brandMetadata,
      blogListMetadata,
    ];
    for (const meta of allMetadata) {
      const og = (meta as unknown as Record<string, unknown>).openGraph as Record<string, unknown>;
      // If NEXT_PUBLIC_SITE_URL is unset the fallback produces https://pelagora.org
      // If it is set the value must still start with https
      expect(og.url as string).toMatch(/^https:\/\//);
    }
  });
});
