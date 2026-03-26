import { track } from "@vercel/analytics";

// ── Skill Download (Primary Conversion) ─────────────────────
export function trackSkillDownloaded(sourcePage: string) {
  track("skill_downloaded", { source_page: sourcePage });
}

// ── Hero CTAs ────────────────────────────────────────────────
export function trackHeroCtaClicked(props: {
  page: string;
  cta_label: string;
  destination: string;
}) {
  track("hero_cta_clicked", props);
}

// ── Persona Selection ────────────────────────────────────────
export function trackPersonaSelected(persona: string) {
  track("persona_selected", { persona });
}

// ── Developer Activation ─────────────────────────────────────
export function trackDocsClicked(sourcePage: string, docSection?: string) {
  track("docs_link_clicked", {
    source_page: sourcePage,
    ...(docSection && { doc_section: docSection }),
  });
}

export function trackGithubClicked(sourcePage: string, destination: string) {
  track("github_clicked", { source_page: sourcePage, destination });
}

// ── Community ────────────────────────────────────────────────
export function trackDiscordClicked(sourcePage: string) {
  track("discord_clicked", { source_page: sourcePage });
}

export function trackDiscussionsClicked(sourcePage: string) {
  track("discussions_clicked", { source_page: sourcePage });
}

// ── Content ──────────────────────────────────────────────────
export function trackBlogPostViewed(slug: string, title: string) {
  track("blog_post_viewed", { slug, title });
}

// ── Cross-sell ───────────────────────────────────────────────
export function trackReffoCtaClicked(sourcePage: string) {
  track("reffo_cta_clicked", { source_page: sourcePage });
}

// ── Brand / Partnership ──────────────────────────────────────
export function trackBrandPageViewed() {
  track("brand_page_viewed");
}
