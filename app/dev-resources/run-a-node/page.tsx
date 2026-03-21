export const metadata = {
  title: "Run a Node — Pelagora",
  description:
    "Three steps to listing your first item for sale on the Pelagora network. Scaffold a Beacon, connect to the mesh, and start trading.",
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
          style={{
            position: "absolute", right: 0, top: 0, height: "100%",
            width: "45%", objectFit: "cover", objectPosition: "right top",
            opacity: 0.35, zIndex: 0,
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <a href="/dev-resources" className="hero-back">
            <svg viewBox="0 0 24 24"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Get the Skill
          </a>
          <div className="hero-eyebrow">Run a Node</div>
          <h1>Three steps to listing your first item <em>for sale on Pelagora</em></h1>
          <p className="hero-sub">
            You don&apos;t need the Reffo UI. Grab the skill, hand it to your AI, and your agent
            will have you connected and selling in minutes.
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
            <a href="https://docs.pelagora.org/getting-started/quick-start" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Quick Start Guide
            </a>
          </div>
        </div>
      </section>

      {/* STEPS OVERVIEW */}
      <section className="steps-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">The Path</div>
          <div className="section-title">From zero to your first listing</div>
          <div className="section-desc" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Each step takes a few minutes. Your AI agent does the heavy lifting.
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
      </section>

      {/* STEP 1 */}
      <section className="detail white">
        <div className="container-narrow">
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
                <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">npx pelagora-cli-installer</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="output">? Project directory: </span><span className="highlight">./my-beacon</span></div>
                <div className="terminal-line"><span className="output">? HTTP port: </span><span className="highlight">3000</span></div>
                <div className="terminal-line"><span className="output">? Package manager: </span><span className="highlight">npm</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Project created at ~/my-beacon</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Dependencies installed</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> .env configured</span></div>
              </div>
            </div>
            <p>The installer creates a complete project with:</p>
            <ul>
              <li><strong>package.json</strong> with <code>pelagora</code> as a dependency</li>
              <li><strong>.env</strong> with your port and optional Reffo API key (<a href="https://docs.pelagora.org/pelagora/configuration" target="_blank" rel="noreferrer">see all config options</a>)</li>
              <li><strong>uploads/</strong> directory for item photos and media</li>
            </ul>
            <div className="callout">
              <p><strong>Using the Pelagora Skill?</strong> Just tell your AI agent &quot;I want to run a node on Pelagora&quot; and it will run the installer for you, choosing sensible defaults.</p>
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
                <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">cd my-beacon && npm start</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Beacon started on port <span className="highlight">3000</span></span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> DHT connected — <span className="highlight">12 peers</span> discovered</span></div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Web UI available at <span className="highlight">http://localhost:3000</span></span></div>
              </div>
            </div>
            <p>Once connected, you can:</p>
            <ul>
              <li><strong>Browse the network</strong> through the built-in <a href="https://docs.pelagora.org/pelagora/web-ui" target="_blank" rel="noreferrer">Web UI</a> at <code>localhost:3000</code></li>
              <li><strong>Search for items</strong> listed by other Beacons on the mesh</li>
              <li><strong>Set your profile</strong> — give your Beacon a name, location, and description so others can find you</li>
            </ul>
            <div className="callout">
              <p><strong>Want AI access?</strong> Install the MCP server with <code>npm install -g @pelagora/mcp</code> and your AI agent can browse the network, manage inventory, and negotiate on your behalf. See the <a href="https://docs.pelagora.org/mcp-server/" target="_blank" rel="noreferrer">MCP server docs</a>.</p>
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
              Your Beacon is live. Now give it something to sell. Create an inventory item, attach a
              price, and it&apos;s immediately discoverable by every other node on the mesh.
            </p>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot red" /><div className="terminal-dot yellow" /><div className="terminal-dot green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="comment"># Create an item via the REST API</span></div>
                <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">curl -X POST localhost:3000/api/items \</span></div>
                <div className="terminal-line"><span className="cmd">  -H &quot;Content-Type: application/json&quot; \</span></div>
                <div className="terminal-line"><span className="cmd">  {`  -d '{"name": "`}<span className="highlight">Channel Islands Surfboard</span>{`",`}</span></div>
                <div className="terminal-line"><span className="cmd">       {`"description": "6ft shortboard, great condition",`}</span></div>
                <div className="terminal-line"><span className="cmd">       {`"category": "sporting-goods"}'`}</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="comment"># Add a price offer</span></div>
                <div className="terminal-line"><span className="prompt">$ </span><span className="cmd">curl -X POST localhost:3000/api/offers \</span></div>
                <div className="terminal-line"><span className="cmd">  {`-d '{"refId": "`}<span className="highlight">item_8x7k2m</span>{`", "price": 450, "currency": "USD"}'`}</span></div>
                <div className="terminal-line">&nbsp;</div>
                <div className="terminal-line"><span className="success">✓</span><span className="output"> Item published to mesh (<span className="highlight">12 peers</span> notified)</span><span className="terminal-cursor" /></div>
              </div>
            </div>
            <p>That&apos;s it. Your item is now visible to anyone searching the Pelagora network. You can also do this through:</p>
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
            Your Beacon is running and your first item is listed. The Pelagora Skill has two more paths to explore.
          </div>
          <div className="whats-next-grid">
            <a href="https://docs.pelagora.org/mcp-server/" target="_blank" rel="noreferrer" className="next-card">
              <h3>Set Up the MCP Server</h3>
              <p>Give your AI agent full access to your Beacon — manage inventory, search the network, and handle negotiations hands-free.</p>
              <div className="card-link">MCP docs <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg></div>
            </a>
            <a href="/dev-resources/build-something" className="next-card">
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
