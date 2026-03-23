export const metadata = {
  title: "Get the Skill — Pelagora Developer Resources",
  description:
    "Download the Pelagora developer skill. Hand it to your AI agent and start building on the open commerce network.",
};

export default function DevResourcesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/woman-surfboards.png"
          alt=""
          aria-hidden="true"
          className="hero-side-img"
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">Developer Resources</div>
          <h1>
            Hand it to your AI. <em>It knows what to do.</em>
          </h1>
          <p className="hero-sub">
            The Pelagora Skill gives your AI agent everything it needs to get
            you connected, building, or contributing. Download it, drop it in
            your project, and go!
          </p>
          <div className="hero-actions">
            <a href="/pelagora.md" download className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download AI Skill
            </a>
            <a href="https://docs.pelagora.org" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* SKILL PREVIEW */}
      <section className="skill-band" id="skill">
        <div className="container">
          <div className="skill-band-header">
            <div className="section-label">Hands-free development</div>
            <div className="section-title">Already using AI?</div>
            <div className="section-desc">
              The Pelagora Skill gives your AI agent everything it needs to connect you to the
              network, spin up a Beacon, and start building commerce apps. Drop{" "}
              <code>pelagora.md</code> into your project. Your AI agent picks it up and knows how
              to get you connected, building, or contributing.
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <div className="terminal-title">pelagora.md</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="comment"># Drop pelagora.md into your project</span></div>
              <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">cp pelagora.md .claude/skills/</span></div>
              <div className="terminal-line">&nbsp;</div>
              <div className="terminal-line"><span className="comment"># Ask your AI agent</span></div>
              <div className="terminal-line"><span className="prompt">&gt; </span><span className="cmd">&quot;I want to join the Pelagora network&quot;</span></div>
              <div className="terminal-line">&nbsp;</div>
              <div className="terminal-line"><span className="success">✓</span><span className="output"> Beacon scaffolded at ./my-beacon</span></div>
              <div className="terminal-line"><span className="success">✓</span><span className="output"> Connected to Pelagora mesh — <span className="highlight">12 peers</span></span></div>
              <div className="terminal-line"><span className="success">✓</span><span className="output"> MCP server ready</span></div>
              <div className="terminal-line"><span className="success">✓</span><span className="output"> Web UI at <span className="highlight">http://localhost:3000</span></span><span className="terminal-cursor" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="personas" id="personas">
        <div className="container">
          <div className="personas-label">What&apos;s Inside the Skill</div>
          <div className="personas-title">Where do you want to start?</div>
          <div className="personas-grid">
            <a href="/buy-or-sell" className="persona-card">
              <div className="persona-icon ocean">⚓</div>
              <h3>Run a Node</h3>
              <div className="persona-quote">&quot;I want to join the network&quot;</div>
              <p>Scaffold a Beacon, connect to the mesh, browse listings, buy and sell directly. Your AI handles the setup.</p>
              <div className="persona-link">
                Get started
                <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>
            </a>
            <a href="/build" className="persona-card">
              <div className="persona-icon teal">⚙</div>
              <h3>Build Something</h3>
              <div className="persona-quote">&quot;I want to build on top of this&quot;</div>
              <p>Create Skills, extensions, and integrations. Build a rental platform, a local marketplace, or something new entirely.</p>
              <div className="persona-link">
                Start building
                <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>
            </a>
            <a href="/contribute" className="persona-card">
              <div className="persona-icon terra">✳</div>
              <h3>Contribute</h3>
              <div className="persona-quote">&quot;I want to make this better&quot;</div>
              <p>Submit PRs, fix bugs, improve docs. The skill walks you through repo conventions, tech patterns, and finding work.</p>
              <div className="persona-link">
                Get involved
                <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Your Beacon is<br /><em>one download away.</em></h2>
          <p>Drop <code>pelagora.md</code> into your project and let your AI take it from there.</p>
          <div className="cta-actions">
            <a href="/pelagora.md" download className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download AI Skill
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
                        <a href="/contribute">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              Contribute
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
