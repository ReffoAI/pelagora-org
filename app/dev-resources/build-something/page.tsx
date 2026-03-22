export const metadata = {
  title: "Build Something — Pelagora",
  description:
    "Build commerce apps, Skills, and integrations on the Pelagora network. Rental platforms, reverse auctions, group buys, or something entirely new.",
};

export default function BuildSomethingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <a href="/dev-resources" className="hero-back">
            <svg viewBox="0 0 24 24"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Developer Resources
          </a>
          <div className="hero-eyebrow">Build Something</div>
          <h1>The network is the platform. <em>Build whatever you want.</em></h1>
          <p className="hero-sub">
            Pelagora gives you a mesh of Beacons, a protocol for commerce, and extension points at
            every layer. Build a rental app, a reverse auction engine, or something nobody&apos;s
            thought of yet.
          </p>
          <div className="hero-actions">
            <a href="https://docs.pelagora.org/guides/building-skills" target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              Skill-Building Guide
            </a>
            <a href="https://docs.pelagora.org/glossary/beacon/api-reference" target="_blank" rel="noreferrer" className="btn btn-secondary">
              API Reference
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN BUILD */}
      <section className="ideas">
        <div className="container">
          <div className="section-label">What Can You Build?</div>
          <div className="section-title">Your commerce, your rules</div>
          <div className="section-desc">
            Pelagora is the network. What you build on it is up to you. Here are some starting points.
          </div>
          <div className="ideas-grid">
            <div className="idea-card">
              <div className="idea-card-icon ocean">⚓</div>
              <h3>Peer-to-Peer Marketplace</h3>
              <p>List items, negotiate offers, trade directly. No middleman fees, no platform lock-in. Your listings live on your Beacon and are discoverable across the mesh.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon teal">⛵</div>
              <h3>Rental Network</h3>
              <p>Rent out surfboards, cameras, tools — anything. Build availability calendars, pricing tiers, and booking flows as a Skill that any Beacon can install.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon terra">✳</div>
              <h3>Reverse Auction Engine</h3>
              <p>Buyers post what they want. Sellers compete on price. Build the matching logic as a Skill and let the DHT handle peer discovery.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon mixed">⚙</div>
              <h3>Group Buy Coordinator</h3>
              <p>Aggregate demand across the mesh. Buyers pool together, hit a threshold, unlock bulk pricing. The Skill handles commitments, deadlines, and notifications. See the <a href="https://docs.pelagora.org/glossary/pim-protocol/" target="_blank" rel="noreferrer">PIM Protocol</a> for data types.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon ocean">🏘</div>
              <h3>Local Commerce Hub</h3>
              <p>Build a neighborhood marketplace Skill that filters by proximity. Farmers markets, garage sales, and local services — all discoverable without a central platform.</p>
            </div>
            <div className="idea-card">
              <div className="idea-card-icon teal">🔗</div>
              <h3>Something Entirely New</h3>
              <p>The extension points are open. Loyalty programs, escrow systems, reputation layers, AI-powered negotiation bots — if it touches commerce, you can build it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILDING BLOCKS */}
      <section className="blocks">
        <div className="container">
          <div className="section-label">Extension Points</div>
          <div className="section-title">How things fit together</div>
          <div className="section-desc">
            Pelagora has three main surfaces you can build on. The Pelagora Skill walks your AI through all of them.
          </div>
          <div className="blocks-grid">
            <div>
              <div className="block-item">
                <h3>REST API <span className="block-badge api">API</span></h3>
                <p>Every Beacon exposes a local <a href="https://docs.pelagora.org/glossary/beacon/api-reference" target="_blank" rel="noreferrer">REST API</a> for managing inventory, offers, and negotiations. Build frontends, scripts, or integrations that talk to your Beacon programmatically.</p>
                <ul>
                  <li><strong>Items</strong> — CRUD operations for your inventory</li>
                  <li><strong>Offers</strong> — Create, accept, counter, or reject price offers</li>
                  <li><strong>Peers</strong> — Discover and query other Beacons on the mesh</li>
                  <li><strong>Search</strong> — Full-text search across the network using Schema.org data</li>
                </ul>
              </div>
              <div className="block-item">
                <h3>DHT Events <span className="block-badge event">Events</span></h3>
                <p>The <a href="https://docs.pelagora.org/glossary/pelagora/dht-networking" target="_blank" rel="noreferrer">Distributed Hash Table</a> fires events when things happen on the network — new peers, incoming offers, search queries. Subscribe to these events to build reactive Skills.</p>
                <ul>
                  <li><strong>peer:discovered</strong> — A new Beacon joined the mesh</li>
                  <li><strong>offer:received</strong> — Someone wants to buy or negotiate</li>
                  <li><strong>item:published</strong> — A new listing appeared on the network</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="block-item">
                <h3>MCP Server <span className="block-badge tool">Tool</span></h3>
                <p>The <a href="https://docs.pelagora.org/glossary/mcp-server/" target="_blank" rel="noreferrer"><code>@pelagora/mcp</code></a> server lets AI agents interact with your Beacon. Register custom <a href="https://docs.pelagora.org/glossary/mcp-server/tools" target="_blank" rel="noreferrer">tools</a> so your AI can do things specific to your app.</p>
                <div className="terminal">
                  <div className="terminal-bar">
                    <div className="terminal-dot red" /><div className="terminal-dot yellow" /><div className="terminal-dot green" />
                    <div className="terminal-title">custom-tool.js</div>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line"><span className="comment">// Register a custom MCP tool</span></div>
                    <div className="terminal-line"><span className="cmd">server.registerTool({'{'}</span></div>
                    <div className="terminal-line"><span className="cmd">  name: <span className="highlight">&apos;find-nearby-rentals&apos;</span>,</span></div>
                    <div className="terminal-line"><span className="cmd">  description: &apos;Search for rental listings within a radius&apos;,</span></div>
                    <div className="terminal-line"><span className="cmd">  schema: z.object({'{'}</span></div>
                    <div className="terminal-line"><span className="cmd">    lat: z.number(),</span></div>
                    <div className="terminal-line"><span className="cmd">    lng: z.number(),</span></div>
                    <div className="terminal-line"><span className="cmd">    radiusKm: z.number().default(10)</span></div>
                    <div className="terminal-line"><span className="cmd">  {'}'}),</span></div>
                    <div className="terminal-line"><span className="cmd">  handler: async ({'{ lat, lng, radiusKm }'}) =&gt; {'{'}</span></div>
                    <div className="terminal-line"><span className="cmd">    <span className="comment">// Query peers, filter by distance</span></span></div>
                    <div className="terminal-line"><span className="cmd">  {'}'}</span></div>
                    <div className="terminal-line"><span className="cmd">{')'}<span className="terminal-cursor" /></span></div>
                  </div>
                </div>
              </div>
              <div className="callout">
                <p><strong>Using the Pelagora Skill?</strong> Tell your AI &quot;I want to build a rental Skill for Pelagora&quot; and it will scaffold the project, set up the extension points, and walk you through the API patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="whats-next">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">Keep Going</div>
          <div className="section-title">Resources for builders</div>
          <div className="section-desc" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Everything you need to go from idea to working Skill.
          </div>
          <div className="whats-next-grid">
            <a href="https://docs.pelagora.org/guides/building-skills" target="_blank" rel="noreferrer" className="next-card">
              <h3>Skill-Building Guide</h3>
              <p>Step-by-step walkthrough of creating, testing, and publishing a Pelagora Skill. Covers project structure, event handling, and packaging.</p>
              <div className="card-link">Read the guide <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="https://docs.pelagora.org/glossary/beacon/api-reference" target="_blank" rel="noreferrer" className="next-card">
              <h3>API &amp; Data Model</h3>
              <p>Full documentation for the Beacon REST API, DHT message types, MCP tool registration, and PIM Protocol data schemas.</p>
              <div className="card-link">API docs <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="https://github.com/orgs/ReffoAI/discussions" target="_blank" rel="noreferrer" className="next-card">
              <h3>Community Discussions</h3>
              <p>Share what you&apos;re building, get feedback, find collaborators. RFCs for new features and protocol changes happen here too.</p>
              <div className="card-link">Join the conversation <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to build on<br /><em>the open sea?</em></h2>
          <p>Grab the Skill, hand it to your AI, and start building something new.</p>
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
        </div>
      </section>
    </main>
  );
}
