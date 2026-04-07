import NotTechnical from "./NotTechnical";
import { TrackedLink } from "@/components/TrackedLink";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  title: "Run a Beacon — Pelagora",
  description:
    "Three steps to listing your first item for sale on the Pelagora network. Scaffold a Beacon, connect to the mesh, and start trading.",
  openGraph: {
    title: "Run a Beacon — Pelagora",
    description: "Three steps to listing your first item for sale on the Pelagora network. Scaffold a Beacon, connect to the mesh, and start trading.",
    url: `${siteUrl}/buy-or-sell`,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/woman-clothes-shopping_og.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run a Beacon — Pelagora",
    description: "Three steps to listing your first item for sale on the Pelagora network. Scaffold a Beacon, connect to the mesh, and start trading.",
    images: [`${siteUrl}/images/woman-clothes-shopping_og.jpg`],
  },
};

export default function RunANodePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/woman-clothes-shopping.png"
          alt=""
          aria-hidden="true"
          className="hero-side-img"
          style={{ objectPosition: "right top" }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
<div className="hero-eyebrow">Set up your Beacon</div>
          <h1>Listing your first item <em>for sale on Pelagora</em></h1>
         {/*  You don&apos;t need the <a href="https://www.reffo.ai/" target="_blank" rel="noreferrer" style={{color:"var(--teal)",fontWeight:600,textDecoration:"none"}}>Reffo UI</a>.  */}
          <p className="hero-sub">
            Save the markdown file, hand it to your AI, and your agent
            will have you connected and selling in minutes.
          </p>
          <div className="hero-actions">
            <TrackedLink href="/SKILL.md" download className="btn btn-primary" event="skill_downloaded" eventProps={{ source_page: "buy-or-sell" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download AI Skill
            </TrackedLink>
            <TrackedLink href="https://docs.pelagora.org/getting-started/quick-start" target="_blank" rel="noreferrer" className="btn btn-secondary" event="docs_link_clicked" eventProps={{ source_page: "buy-or-sell", doc_section: "quick-start" }}>
              Quick Start Guide
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* STEPS OVERVIEW */}
      {/* <section className="steps-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">The Path</div>
          <div className="section-title">List your item in minutes</div>
          <div className="section-desc" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Your AI agent does the heavy lifting.
          </div>
           <div className="steps-grid">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Scaffold Your Beacon</h3>
              <p>Run the CLI installer. It creates a project directory, installs dependencies, and generates your config.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Connect to the Mesh</h3>
              <p>Start your Beacon. It joins the Pelagora network via DHT and starts discovering other nodes automatically.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>List Your First Item</h3>
              <p>Create an inventory item, set a price, and publish it to the mesh. Other Beacons can find and negotiate with you.</p>
            </div>  
          </div>
        </div>
      </section> */}

      {/* NON-TECHNICAL CALLOUT */}
      <NotTechnical />

      {/* STEP 1 */}
      <section className="detail white">
        <div className="container-narrow">
        <div className="section-label">The Path</div>
        <div className="section-title">List your item in minutes</div>
        <div className="video-embed" style={{ width: '100%', aspectRatio: '16 / 9', margin: '32px 0', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TIu7OE4nmy4"
            title="Pelagora Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
          <div className="detail-header">
            <div className="detail-num ocean">1</div>
            <h2>Scaffold Your Beacon</h2>
          </div>
          <div className="detail-body">
            <p>
              A Beacon is your node on the Pelagora network — a lightweight server that stores your
              inventory, manages negotiations, and connects you to other nodes. The CLI installer
              scaffolds everything you need.
            </p>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot red" /><div className="terminal-dot yellow" /><div className="terminal-dot green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="comment"># Scaffold a new Beacon project</span></div>
                <div className="terminal-line"><span className="prompt-symbol">$ </span><span className="cmd">npx pelagora-cli-installer</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="output">? Project directory: </span><span className="highlight">./my-beacon</span></div>
                <div className="terminal-line"><span className="output">? HTTP port: </span><span className="highlight">3000</span></div>
                <div className="terminal-line"><span className="output">? Package manager: </span><span className="highlight">npm</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Project created at ~/my-beacon</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Dependencies installed</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> .env configured</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Pelagora node is ready!</span></div>
              </div>
            </div>
            <p style={{ marginTop: 32 }}>The installer creates a complete project with:</p>
            <ul>
              <li><strong>package.json</strong> with <code>pelagora</code> as a dependency</li>
              <li><strong>.env</strong> with your port and optional Reffo API key (<a href="https://docs.pelagora.org/glossary/beacon/configuration" target="_blank" rel="noreferrer">see all config options</a>)</li>
              <li><strong>uploads/</strong> directory for item photos and media</li>
            </ul>
            <div className="callout">
              <p><strong>Using the Pelagora Skill?</strong> Just tell your AI agent &quot;Use the Pelagora skill to help me create a beacon on the Pelagora network&quot; and it will run the installer for you, choosing sensible defaults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="detail sand">
        <div className="container-narrow">
          <div className="detail-header">
            <div className="detail-num teal">2</div>
            <h2>Connect to the Mesh</h2>
          </div>
          <div className="detail-body">
            <p>
              Start your Beacon and it automatically connects to the Pelagora network via the
              Distributed Hash Table (DHT). No central server, no registration — just peers finding
              peers.
            </p>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot red" /><div className="terminal-dot yellow" /><div className="terminal-dot green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="prompt-symbol">$ </span><span className="cmd">cd my-beacon && npm start</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Beacon started on port <span className="highlight">3000</span></span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> DHT connected — <span className="highlight">12 peers</span> discovered</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Web UI available at <span className="highlight">http://localhost:3000</span></span></div>
              </div>
            </div>
            <p style={{ marginTop: 32 }}>Once connected, you can:</p>
            <ul>
              <li><strong>Browse the network</strong> through the built-in <a href="https://docs.pelagora.org/glossary/pelagora/web-ui" target="_blank" rel="noreferrer">Web UI</a> at <code>localhost:3000</code></li>
              <li><strong>Search for items</strong> listed by other Beacons on the mesh</li>
              <li><strong>Set your profile</strong> — give your Beacon a name, location, and description so others can find you</li>
            </ul>
            <div className="callout">
              <p><strong>Want AI access?</strong> Install the MCP server with <code>npm install -g @pelagora/mcp</code> and your AI agent can browse the network, manage inventory, and negotiate on your behalf. See the <a href="https://docs.pelagora.org/glossary/mcp-server/" target="_blank" rel="noreferrer">MCP server docs</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="detail white">
        <div className="container-narrow">
          <div className="detail-header">
            <div className="detail-num terra">3</div>
            <h2>List Your First Item</h2>
          </div>
          <div className="detail-body">
            <p>
              Your Beacon is live. Now give it something to sell. Create an inventory item by snapping a photo. , attach a
              price, and it&apos;s immediately discoverable by every other node on the mesh.
            </p>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot red" /><div className="terminal-dot yellow" /><div className="terminal-dot green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="prompt-symbol">&gt; </span><span className="cmd">/pelagora I want to list a board game for sale on my beacon. I have a like-new copy of Balderdash. I&apos;d sell it for $10.</span></div>
                <div className="terminal-line"><span className="output">──────────</span></div>
                <div className="terminal-line"><span className="prompt-symbol">$ </span><span className="cmd">{'curl -s -X POST http://localhost:8888/refs \\'}</span></div>
                <div className="terminal-line"><span className="cmd">{'    -H "Content-Type: application/json" \\'}</span></div>
                <div className="terminal-line"><span className="cmd">{"    -d '{"}</span></div>
                <div className="terminal-line"><span className="cmd">{'      "name": "'}<span className="highlight">Balderdash Board Game</span>{'",'}
                </span></div>
                <div className="terminal-line"><span className="cmd">{'      "description": "Like-new copy of Balderdash. Complete with all pieces and cards.",'}
                </span></div>
                <div className="terminal-line"><span className="cmd">{'      "category": "'}<span className="highlight">Toys &amp; Hobbies</span>{'",'}
                </span></div>
                <div className="terminal-line"><span className="cmd">{'      "subcategory": "Board Games & Puzzles",'}
                </span></div>
                <div className="terminal-line"><span className="cmd">{'      "condition": "like_new",'}
                </span></div>
                <div className="terminal-line"><span className="cmd">{"      \"listingStatus\": \"for_sale\""}
                </span></div>
                <div className="terminal-line"><span className="cmd">{"    }'"}</span></div>
              </div>
            </div>
            <p style={{ marginTop: 32 }}>That&apos;s it. Your item is now visible to anyone searching the Pelagora network. You can also do this through:</p>
            <ul>
              <li><strong>The Web UI</strong> at <code>localhost:3000</code> — point-and-click inventory management</li>
              <li><strong>Your AI agent</strong> via the MCP server — &quot;list my surfboard for $450&quot;</li>
            </ul>
            <div className="callout">
              <p><strong>Negotiations are peer-to-peer.</strong> When a buyer sends a proposal, you can accept, reject, or counter — all happening directly between Beacons over the DHT. No platform fees, no middleman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="whats-next">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">What&apos;s Next</div>
          <div className="section-title">You&apos;re on the mesh. Now what?</div>
          <div className="section-desc" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Your Beacon is running and your first item is listed. The Pelagora Skill has more paths to explore!
          </div>
          <div className="whats-next-grid">
            <a href="https://docs.pelagora.org/glossary/mcp-server/" target="_blank" rel="noreferrer" className="next-card">
              <h3>Set Up the MCP Server</h3>
              <p>Give your AI agent full access to your Beacon — manage inventory, search the network, and handle negotiations hands-free.</p>
              <div className="card-link">MCP docs <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="/build" className="next-card">
              <h3>Build Something</h3>
              <p>Create Skills, extensions, and integrations on top of your Beacon. Rental platforms, reverse auctions, or something entirely new.</p>
              <div className="card-link">Start building <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="https://github.com/ReffoAI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="next-card">
              <h3>Contribute to Pelagora</h3>
              <p>Found a bug? Have an idea? The codebase is open. Read the contributing guide and submit your first PR.</p>
              <div className="card-link">Contributing guide <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to build on<br /><em>the open sea?</em></h2>
          <p>Grab the Skill, hand it to your AI, and have a Beacon running in minutes.</p>
          <div className="cta-actions">
            <TrackedLink href="/SKILL.md" download className="btn btn-primary" event="skill_downloaded" eventProps={{ source_page: "buy-or-sell" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download AI Skill
            </TrackedLink>
            <TrackedLink href="https://docs.pelagora.org" target="_blank" rel="noreferrer" className="btn btn-secondary" event="docs_link_clicked" eventProps={{ source_page: "buy-or-sell" }}>Read the Docs</TrackedLink>
          </div>
          <div className="cta-links">
            <TrackedLink href="https://github.com/ReffoAI" target="_blank" rel="noreferrer" event="github_clicked" eventProps={{ source_page: "buy-or-sell", destination: "org" }}>
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
              GitHub
            </TrackedLink>
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
