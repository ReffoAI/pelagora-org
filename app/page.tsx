export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-octopus">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pelagora-octopus-hero.png" alt="" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="hero-eyebrow">Open Source Commerce</div>
          <h1>What if commerce worked like <em>the internet itself?</em></h1>
          <p className="hero-sub">
            Pelagora is a decentralized network where every node is a marketplace.
            Grab the Skill, hand it to your AI, and start building.
          </p>
          <div className="hero-actions">
            <a href="/ai-skill" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
              Start Building
            </a>
            <a href="https://docs.pelagora.org" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS PELAGORA */}
      <section className="what" id="about">
        <div className="container">
          <div className="section-label">What is Pelagora?</div>
          <div className="section-title">A mesh network for commerce</div>
          <div className="section-desc">
            Not an app. Not a platform. A protocol layer that lets you build any commerce experience on a decentralized network of Beacons.
          </div>
          <div className="what-grid">
            <a href="https://docs.pelagora.org/glossary/pelagora/" target="_blank" rel="noreferrer" className="what-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="what-card-icon ocean">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3>Beacons</h3>
              <p>Each node on the network is a Beacon — a lightweight server you run on your machine. Your data stays yours. You choose what to share.</p>
            </a>
            <a href="https://docs.pelagora.org/glossary/pelagora/dht-networking" target="_blank" rel="noreferrer" className="what-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="what-card-icon teal">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Peer Discovery</h3>
              <p>Beacons find each other via <code>DHT</code> — no central registry. Connect to the mesh and browse what others have listed using <code>Schema.org</code> data.</p>
            </a>
            <a href="/ai-skill" className="what-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="what-card-icon terra">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Skills</h3>
              <p>Extend your Beacon with modular Skills — reverse auctions, rental managers, group buys. Build your own or install from the community.</p>
            </a>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey" id="journey" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-label">Get Started</div>
          <div className="section-title">Three steps to your first Beacon</div>
          <div className="section-desc">Hand the Skill to your AI agent. It handles the rest.</div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Grab the Skill</h3>
              <p>
                Download{" "}
                <a href="/pelagora.md" download style={{ color: "var(--teal)", textDecoration: "none", fontWeight: 600 }}>
                  <code>pelagora.md</code>
                </a>{" "}
                and give it to your AI agent. It contains everything your agent needs to get you set up.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Spin Up a Beacon</h3>
              <p>Your AI runs the installer, creates your Beacon, and connects you to the Pelagora mesh automatically.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Start Trading</h3>
              <p>List items, browse the network, negotiate with peers. Your Beacon is live and discoverable.</p>
            </div>
          </div>
          <div className="journey-cta">
            <a href="/get-started">
              See the full walkthrough
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/woman-clothes-rack.png"
          alt="Woman browsing clothes on a rack"
          style={{
            width: "100%", height: 450, objectFit: "cover",
            objectPosition: "center 15%", marginTop: 50, display: "block",
          }}
        />
      </section>

      {/* USE CASES + TERMINAL */}
      <section className="usecases" id="build">
        <div className="container">
          <div className="section-label">What Can You Build?</div>
          <div className="section-title">Your commerce, your rules</div>
          <div className="section-desc">Pelagora is the network. What you build on it is up to you.</div>
          <div className="usecases-grid">
            <div>
              <div className="usecase-cards">
                <div className="usecase-card">
                  <div className="usecase-icon">&#9878;</div>
                  <div>
                    <h4>Peer-to-Peer Marketplace</h4>
                    <p>List items, negotiate offers, trade directly. No middleman fees, no platform lock-in. Your listings live on your Beacon.</p>
                  </div>
                </div>
                <div className="usecase-card">
                  <div className="usecase-icon">&#9973;</div>
                  <div>
                    <h4>Rental Network</h4>
                    <p>Rent out surfboards, cameras, tools — anything. Availability, pricing, and booking all managed from your Beacon.</p>
                  </div>
                </div>
                <div className="usecase-card">
                  <div className="usecase-icon">&#10035;</div>
                  <div>
                    <h4>Group Buy Coordinator</h4>
                    <p>Aggregate demand across the mesh. Buyers pool together, hit a threshold, unlock bulk pricing. The Skill handles the logic.</p>
                  </div>
                </div>
              </div>
              <div className="usecases-cta">
                <a href="/contribute">
                  Explore what you can build
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="comment"># Install the Pelagora CLI</span></div>
                <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">npx create-reffo-beacon my-surf-shop</span></div>
                <div className="terminal-line"><span className="output">&nbsp;</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Beacon created at ./my-surf-shop</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Connected to Pelagora mesh</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> MCP server ready</span></div>
                <div className="terminal-line"><span className="output">&nbsp;</span></div>
                <div className="terminal-line"><span className="comment"># Create your first listing</span></div>
                <div className="terminal-line">
                  <span className="prompt">$ </span>
                  <span className="cmd">{"curl localhost:3000/api/refs -d '{\"name\": \""}<span className="highlight">Channel Islands Surfboard</span>{"\"}'"}
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="output">→ Ref <span className="highlight">ref_8x7k2m</span> published to mesh (12 peers)</span>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to build on<br /><em>the open sea?</em></h2>
          <p>Grab the Skill, hand it to your AI, and have a Beacon running in minutes.</p>
          <div className="cta-actions">
            <a href="/ai-skill" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
              Start Building
            </a>
          </div>
          <div className="cta-links">
            <a href="https://github.com/ReffoAI" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
              GitHub
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
