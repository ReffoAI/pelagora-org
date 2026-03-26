const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  title: "Contribute — Pelagora",
  description:
    "Help build the open commerce network. Submit PRs, fix bugs, improve docs, and shape the future of Pelagora.",
  openGraph: {
    title: "Contribute — Pelagora",
    description: "Help build the open commerce network. Submit PRs, fix bugs, improve docs, and shape the future of Pelagora.",
    url: `${siteUrl}/contribute`,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/helping_og.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribute — Pelagora",
    description: "Help build the open commerce network. Submit PRs, fix bugs, improve docs, and shape the future of Pelagora.",
    images: [`${siteUrl}/images/helping_og.jpg`],
  },
};

export default function ContributePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/helping.png"
          alt=""
          aria-hidden="true"
          className="hero-side-img"
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">Open Source</div>
          <h1 style={{ maxWidth: 700 }}>Help build <em>the open commerce network.</em></h1>
          <p className="hero-sub" style={{ maxWidth: 620 }}>
            Pelagora is open source. Whether you fix a bug, improve the docs, or propose a new
            protocol feature — every contribution shapes what commerce looks like on the open web.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/ReffoAI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              Contribution Guide
            </a>
            <a href="https://github.com/ReffoAI" target="_blank" rel="noreferrer" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* WAYS TO CONTRIBUTE */}
      <section className="ideas">
        <div className="container">
          <div className="section-label">Get Involved</div>
          <div className="section-title">Every contribution counts</div>
          <div className="section-desc">
            You don&apos;t need to be an expert. There are meaningful ways to help at every skill level.
          </div>
          <div className="ideas-grid">
            <div className="idea-card">
              <div className="idea-card-icon ocean">🐛</div>
              <h3>Fix Bugs</h3>
              <p>Browse open issues tagged <code>good first issue</code> or <code>bug</code>. Pick one, fix it, and open a PR. The contributing guide walks you through repo conventions and review expectations.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon teal">📖</div>
              <h3>Improve the Docs</h3>
              <p>Found something confusing in the docs? Outdated instructions? Missing examples? Documentation PRs are some of the most valuable contributions and the easiest place to start.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon terra">💡</div>
              <h3>Propose Features</h3>
              <p>Have an idea for a protocol change, new API endpoint, or Skill pattern? Open a discussion in GitHub Discussions. RFCs for significant changes are how Pelagora evolves.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon mixed">🔍</div>
              <h3>Review Pull Requests</h3>
              <p>Code review is a high-leverage contribution. Read open PRs, test them locally, and leave thoughtful feedback. Good reviewers shape the quality of the codebase.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon ocean">🧪</div>
              <h3>Write Tests</h3>
              <p>Untested code is a liability. If you find a code path with no test coverage, adding a test is a welcome PR. Check the contributing guide for test conventions.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon teal">💬</div>
              <h3>Help in the Community</h3>
              <p>Answer questions in GitHub Discussions or on Discord. Helping other developers get unstuck is a meaningful form of contribution that doesn&apos;t require writing any code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="whats-next">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">Before You Start</div>
          <div className="section-title">What you need to know</div>
          <div className="section-desc" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Read these before opening your first PR.
          </div>
          <div className="whats-next-grid">
            <a href="https://github.com/ReffoAI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="next-card">
              <h3>Contributing Guide</h3>
              <p>Repo conventions, branch naming, commit style, PR process, and how the review cycle works. Start here.</p>
              <div className="card-link">Read the guide <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="https://github.com/orgs/ReffoAI/discussions" target="_blank" rel="noreferrer" className="next-card">
              <h3>GitHub Discussions</h3>
              <p>RFCs, feature proposals, and community Q&amp;A. This is where protocol-level decisions get debated before becoming PRs.</p>
              <div className="card-link">Join the conversation <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="https://discord.gg/CfBVrPAC" target="_blank" rel="noreferrer" className="next-card">
              <h3>Discord</h3>
              <p>Real-time chat with other contributors. Good place to ask quick questions, share work-in-progress, or find a collaborator.</p>
              <div className="card-link">Join Discord <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
          </div>
          <div className="journey-cta">
            <a href="https://github.com/ReffoAI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">
              Contribution Guidelines
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to make<br /><em>your first PR?</em></h2>
          <p>Read the contributing guide, find a good first issue, and open a PR. The maintainers are friendly.</p>
          <div className="cta-actions">
            <a href="https://github.com/ReffoAI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              Contribution Guide
            </a>
            <a href="https://docs.pelagora.org" target="_blank" rel="noreferrer" className="btn btn-secondary">Read the Docs</a>
          </div>
          <div className="cta-links">
            <a href="https://github.com/ReffoAI" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
              GitHub
            </a>
            <a href="/build">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.75l-2.25-2.25-.75.75c-.85 0-1.65-.33-2.25-.93L12.23 3.77c-.6-.6-1.4-.93-2.25-.93H9l3.25 3.25"/></svg>
              Build
            </a>
            <a href="https://github.com/orgs/ReffoAI/discussions" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              Community
            </a>
            <a href="/brand">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              Branding
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
