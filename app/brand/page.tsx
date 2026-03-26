import styles from "./brand.module.css";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  title: "Brand Guidelines v1.1 — Pelagora",
  description: "A living guide for how Pelagora looks, sounds, and feels across every touchpoint.",
  openGraph: {
    title: "Brand Guidelines v1.1 — Pelagora",
    description: "A living guide for how Pelagora looks, sounds, and feels across every touchpoint.",
    url: `${siteUrl}/brand`,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/pelagora-octopus-hero_og.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Guidelines v1.1 — Pelagora",
    description: "A living guide for how Pelagora looks, sounds, and feels across every touchpoint.",
    images: [`${siteUrl}/images/pelagora-octopus-hero_og.jpg`],
  },
};

export default function BrandPage() {
  return (
    <div className={styles.page}>
      {/* SECONDARY NAV */}
      <div className={styles.brandNav}>
        <div className={styles.brandNavInner}>
          <a href="#origin">Origin</a>
          <a href="#logo">Logo</a>
          <a href="#colors">Colors</a>
          <a href="#typography">Type</a>
          <a href="#visual">Visual</a>
          <a href="#voice">Voice</a>
          <a href="#terminology">Terms</a>
          <a href="#comparison">Pelagora vs Reffo</a>
          <a href="#dos-donts">Do&apos;s &amp; Don&apos;ts</a>
        </div>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/pelagora-octopus-hero.png" alt="" aria-hidden width={760} height={760} />
        </div>
        <div className={styles.container}>
          <div className={styles.versionBadge}>Brand Guidelines v1.1</div>
          <h1>The <em>Pelagora</em><br />Brand System</h1>
          <p>A living guide for how Pelagora looks, sounds, and feels across every touchpoint — from landing pages to terminal output.</p>
        </div>
      </section>

      {/* ORIGIN */}
      <section className={styles.origin} id="origin">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>01 — Origin</div>
          <div className={styles.sectionTitle}>Where the name comes from</div>
          <div className={styles.sectionDesc}>Pelagora is a portmanteau rooted in two ancient Greek words that together capture the essence of the project: open, borderless exchange.</div>
          <div className={styles.originGrid}>
            <div className={styles.etymCard}>
              <div className={`${styles.greek} ${styles.ocean}`}>Pelagic</div>
              <div className={styles.transliteration}>πελαγικός — pelagikós</div>
              <h3>The Open Sea</h3>
              <p>Relating to the vast, open ocean. Unbounded, deep, and connected. The pelagic zone is where life moves freely, without borders or walls.</p>
            </div>
            <div className={styles.etymCard}>
              <div className={`${styles.greek} ${styles.terra}`}>Agora</div>
              <div className={styles.transliteration}>αγορά — agorá</div>
              <h3>The Marketplace</h3>
              <p>A public open space for assemblies and markets in ancient Greece. The center of civic and commercial life — where people gathered to trade.</p>
            </div>
          </div>
          <div className={styles.originTagline}>An open marketplace on a <span>vast, borderless network</span>.</div>
        </div>
      </section>

      {/* LOGO */}
      <section className={styles.logoSection} id="logo">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>02 — Logo &amp; Mark</div>
          <div className={styles.sectionTitle}>Logo - WIP</div>
          <div className={styles.sectionDesc}>An octopus-column mark paired with the Pelagora wordmark in Josefin Sans. The octopus tentacles form the ionic volutes of a Greek column capital.</div>
          <div className={styles.logoBrief}>
            <div className={styles.briefCard}>
              <h4>Concept</h4>
              <p>An octopus whose body or tentacles subtly incorporate Greek column or arch shapes. The octopus is dominant — the column is structural subtext.</p>
            </div>
            <div className={styles.briefCard}>
              <h4>Style</h4>
              <p>Flat and geometric. No gradients, no gloss. Must work as a favicon, GitHub avatar, and terminal icon at 16px.</p>
            </div>
            <div className={styles.briefCard}>
              <h4>Versatility</h4>
              <p>Monochrome versions required. Mark can be used standalone or alongside the wordmark. Think: cut from a single sheet of paper.</p>
            </div>
          </div>
          <div className={styles.logoGrid}>
            <div className={`${styles.logoBox} ${styles.light}`}>
              <Image src="/images/pelagora-logo.png" alt="Pelagora mark" width={120} height={120} style={{ height: 120, width: "auto" }} />
              <span>Primary mark — light</span>
            </div>
            <div className={`${styles.logoBox} ${styles.dark}`}>
              <Image src="/images/pelagora-logo_reverse.png" alt="Pelagora mark" width={120} height={120} style={{ height: 120, width: "auto" }} />
              <span>Primary mark — dark</span>
            </div>
          </div>
          <div className={styles.usageRules}>
            <div className={styles.usageRule}><div className={styles.ruleIcon}>↔</div><p>Minimum clear space: 1x the mark&apos;s width on all sides</p></div>
            <div className={styles.usageRule}><div className={styles.ruleIcon}>↺</div><p>Never rotate, stretch, or apply drop shadows / effects</p></div>
            <div className={styles.usageRule}><div className={styles.ruleIcon}>○</div><p>Mono versions for single-color contexts (stamps, embossing)</p></div>
            <div className={styles.usageRule}><div className={styles.ruleIcon}>+</div><p>Mark can appear standalone or paired with the wordmark</p></div>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className={styles.colors} id="colors">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>03 — Color Palette</div>
          <div className={styles.sectionTitle}>Colors</div>
          <div className={styles.sectionDesc}>A Mediterranean palette grounded in ocean blues and terracotta warmth. The accent is used sparingly for maximum impact.</div>

          <div className={styles.paletteGroup}>
            <h3>Primary</h3>
            <div className={styles.swatches}>
              {[
                { color: "#0A5E8A", name: "Deep Ocean", role: "Headers, primary UI, logo" },
                { color: "#1A8A7D", name: "Teal", role: "Supporting elements, code, links" },
                { color: "#D4602A", name: "Terracotta", role: "CTAs, highlights, badges" },
              ].map((s) => (
                <div className={styles.swatch} key={s.name}>
                  <div className={styles.swatchColor} style={{ background: s.color }} />
                  <div className={styles.swatchInfo}>
                    <div className={styles.swatchName}>{s.name}</div>
                    <div className={styles.swatchHex}>{s.color}</div>
                    <div className={styles.swatchRole}>{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.paletteGroup}>
            <h3>Neutrals</h3>
            <div className={styles.swatches}>
              {[
                { color: "#1A1A2E", name: "Ink", role: "Body text, dark backgrounds" },
                { color: "#4A5568", name: "Slate", role: "Secondary text, borders" },
                { color: "#F5F0EB", name: "Sand", role: "Page backgrounds, cards" },
                { color: "#FFFFFF", name: "Marble", role: "Clean space, contrast", border: true },
              ].map((s) => (
                <div className={styles.swatch} key={s.name}>
                  <div className={styles.swatchColor} style={{ background: s.color, border: s.border ? "1px solid #eee" : undefined }} />
                  <div className={styles.swatchInfo}>
                    <div className={styles.swatchName}>{s.name}</div>
                    <div className={styles.swatchHex}>{s.color}</div>
                    <div className={styles.swatchRole}>{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.paletteGroup}>
            <h3>Extended / Semantic</h3>
            <div className={styles.swatches}>
              {[
                { color: "#2D8A6E", name: "Aegean", role: "Success states" },
                { color: "#D4922A", name: "Amber", role: "Warnings" },
                { color: "#C94444", name: "Coral", role: "Errors, destructive" },
                { color: "#4A90D9", name: "Sky", role: "Informational" },
              ].map((s) => (
                <div className={styles.swatch} key={s.name}>
                  <div className={styles.swatchColor} style={{ background: s.color }} />
                  <div className={styles.swatchInfo}>
                    <div className={styles.swatchName}>{s.name}</div>
                    <div className={styles.swatchHex}>{s.color}</div>
                    <div className={styles.swatchRole}>{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.colorRules}>
            <h3>Color Rules</h3>
            <div className={styles.rulesGrid}>
              <div className={`${styles.ruleItem} ${styles.do}`}>Terracotta is the accent — use sparingly for CTAs and key callouts</div>
              <div className={`${styles.ruleItem} ${styles.do}`}>Deep Ocean + Sand is the default page pairing</div>
              <div className={`${styles.ruleItem} ${styles.do}`}>Dark mode: Ink background, Marble text, same accent colors</div>
              <div className={`${styles.ruleItem} ${styles.dont}`}>Never place Terracotta on Teal (low contrast, visual clash)</div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className={styles.typography} id="typography">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>04 — Typography</div>
          <div className={styles.sectionTitle}>Type system</div>
          <div className={styles.sectionDesc}>Fira Sans Bold handles all headlines and display text. DM Sans is the workhorse for body copy, UI, and everything else. JetBrains Mono handles code, CLI output, and technical identifiers.</div>

          <div className={styles.typeShowcase}>
            {[
              { meta: "Display\nBold 700\n48–72px", sample: "The open sea of commerce", cls: styles.display },
              { meta: "H1\nBold 700\n36–40px", sample: "Build on the Pelagora mesh", cls: styles.h1 },
              { meta: "H2\nSemi 600\n28–32px", sample: "Every Beacon is a marketplace", cls: styles.h2 },
              { meta: "H3\nMedium 500\n22–24px", sample: "Skills extend what your Beacon can do", cls: styles.h3 },
              { meta: "Body\nRegular 400\n16–18px", sample: "Pelagora nodes discover each other via DHT. Your data stays on your machine. You choose what to share, who to trade with, and what rules to follow.", cls: styles.body },
              { meta: "Small\nRegular 400\n14px", sample: "Version 1.1 — March 2026 — Draft pending logo design", cls: styles.small },
            ].map((row, i) => (
              <div className={styles.typeSpecimen} key={i}>
                <div className={styles.typeMeta} style={{ whiteSpace: "pre-line" }}>{row.meta}</div>
                <div className={row.cls}>{row.sample}</div>
              </div>
            ))}
          </div>

          <div className={styles.monoShowcase}>
            <div className={styles.monoLabel}>Monospace — JetBrains Mono</div>
            <pre>
              <span className={styles.comment}>// Spin up a Beacon in one command</span>{"\n"}
              <span className={styles.keyword}>npx</span> <span className={styles.fn}>create-reffo-beacon</span> <span className={styles.string}>my-surfboard-shop</span>{"\n\n"}
              <span className={styles.comment}># Your Beacon is live at</span>{"\n"}
              <span className={styles.keyword}>http://</span>localhost:<span className={styles.string}>3000</span>{"\n"}
              <span className={styles.comment}># Connected to 12 peers on the mesh</span>
            </pre>
          </div>
        </div>
      </section>

      {/* VISUAL LANGUAGE */}
      <section className={styles.visual} id="visual">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>05 — Visual Language</div>
          <div className={styles.sectionTitle}>Mediterranean + Technical</div>
          <div className={styles.sectionDesc}>The visual world blends Cycladic architecture with developer-native elements. Clean whites, blue domes, arched doorways alongside terminal windows and network diagrams. Neither dominates.</div>

          <div className={styles.visualGrid}>
            <div className={styles.visualCard}>
              <div className={`${styles.visualCardImg} ${styles.med}`}>
                <div className={styles.column} style={{ left: "30%" }} />
                <div className={styles.arch}><div className={styles.dome} /></div>
                <div className={styles.column} style={{ right: "30%" }} />
              </div>
              <div className={styles.visualCardBody}>
                <h4>Architectural References</h4>
                <p>Arches, columns, terraces, and domes as framing devices. Flat geometric illustration style — consistent with the logo direction.</p>
              </div>
            </div>
            <div className={styles.visualCard}>
              <div className={`${styles.visualCardImg} ${styles.tech}`}>
                <div className={styles.nodeGrid}>
                  {[false,true,false,false,false, false,false,true,false,false, true,false,false,false,true, false,false,false,true,false].map((active, i) => (
                    <div key={i} className={`${styles.nodeDot}${active ? ` ${styles.active}` : ""}`} />
                  ))}
                </div>
              </div>
              <div className={styles.visualCardBody}>
                <h4>Network Diagrams</h4>
                <p>Dot grids suggest network nodes. Clean diagrams over cluttered screenshots. Subtle wave patterns for backgrounds at low opacity.</p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--slate)", marginBottom: 20 }}>Iconography — Flat, 2px stroke, rounded</h3>
          <div className={styles.iconGrid}>
            {[
              { label: "Beacon", d: <><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></> },
              { label: "Skill", d: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/> },
              { label: "Mesh", d: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></> },
              { label: "Terminal", d: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></> },
              { label: "Ref", d: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></> },
              { label: "Code", d: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></> },
            ].map((icon) => (
              <div className={styles.iconDemo} key={icon.label}>
                <svg viewBox="0 0 24 24">{icon.d}</svg>
                <span>{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE */}
      <section className={styles.voice} id="voice">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>06 — Brand Voice</div>
          <div className={styles.sectionTitle}>Three registers, one personality</div>
          <div className={styles.sectionDesc}>Pelagora shifts tone by context but never changes who it is. The default is builder-to-builder; visionary and community registers are used at specific touchpoints.</div>

          <div className={styles.voiceCards}>
            <div className={`${styles.voiceCard} ${styles.builder}`}>
              <div className={styles.voiceTag}>Primary</div>
              <h4>Builder-to-Builder</h4>
              <div className={styles.voiceDesc}>Peer-level, technical, concise. Respects the reader&apos;s intelligence. No hand-holding.</div>
              <div className={styles.voiceContext}>Landing page, docs, README, GitHub, blog</div>
              <blockquote>Spin up a Beacon. Connect to the mesh. Start building.</blockquote>
            </div>
            <div className={`${styles.voiceCard} ${styles.visionary}`}>
              <div className={styles.voiceTag}>Elevated</div>
              <h4>Visionary</h4>
              <div className={styles.voiceDesc}>Aspirational, movement-oriented. Paints the picture of what open commerce becomes.</div>
              <div className={styles.voiceContext}>Hero sections, manifesto, keynotes, launches</div>
              <blockquote>Every marketplace ever built chose the same architecture: one company, one database, one set of rules. What if commerce worked like the internet itself?</blockquote>
            </div>
            <div className={`${styles.voiceCard} ${styles.community}`}>
              <div className={styles.voiceTag}>Warm</div>
              <h4>Community</h4>
              <div className={styles.voiceDesc}>Friendly, welcoming, inclusive. No gatekeeping. Makes newcomers feel like they belong.</div>
              <div className={styles.voiceContext}>Onboarding, community channels, contributor docs</div>
              <blockquote>First Beacon? Nice. Here&apos;s what to try next.</blockquote>
            </div>
          </div>

          <div className={styles.voiceRules}>
            <h3>Voice Rules</h3>
            <div className={styles.voiceRulesGrid}>
              <div className={`${styles.voiceCol} ${styles.do}`}>
                <h4>Write like this</h4>
                <div className={styles.voiceExample}>Active voice, second person. Short sentences.</div>
                <div className={styles.voiceExample}>Contractions are fine — it&apos;s, you&apos;ll, don&apos;t.</div>
                <div className={styles.voiceExample}>Code snippets over paragraphs when possible.</div>
              </div>
              <div className={`${styles.voiceCol} ${styles.dont}`}>
                <h4>Never like this</h4>
                <div className={styles.voiceExample}>We are pleased to announce the availability of…</div>
                <div className={styles.voiceExample}>Simply follow these easy steps to get started…</div>
                <div className={styles.voiceExample}>The developer should then proceed to configure…</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINOLOGY */}
      <section className={styles.terminology} id="terminology">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>07 — Key Terminology</div>
          <div className={styles.sectionTitle}>The Pelagora lexicon</div>
          <div className={styles.sectionDesc}>Consistent terminology builds shared understanding. Use these terms exactly as defined across all communications.</div>
          <div className={styles.termGrid}>
            {[
              { name: "Beacon", def: "A node on the Pelagora network.", note: 'Always capitalized. "Your Beacon" not "your beacon server."' },
              { name: "Skill", def: "A modular feature plugin for a Beacon.", note: "Capitalized as a concept. A Beacon can have many Skills." },
              { name: "SKILL.md", def: "The file an AI agent reads to learn Pelagora.", note: "Always monospace/code-styled. The entry point for AI-assisted onboarding." },
              { name: "Mesh", def: "The peer-to-peer network of connected Beacons.", note: '"The mesh" or "the Pelagora mesh."' },
              { name: "Ref", def: "A Schema.org-based item listing on the network.", note: "Short for reference. A product, service, or asset." },
              { name: "MCP Server", def: "The AI integration layer for interacting with Beacons.", note: "Spell out on first use; abbreviate after." },
              { name: "DHT", def: "Distributed Hash Table — how Beacons discover each other.", note: "Spell out on first use in non-technical contexts." },
            ].map((t) => (
              <div className={styles.termCard} key={t.name}>
                <div className={styles.termName}>{t.name}</div>
                <div className={styles.termDef}>{t.def}</div>
                <div className={styles.termNote}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className={styles.comparison} id="comparison">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>08 — Brand Separation</div>
          <div className={styles.sectionTitle}>Pelagora vs. <a href="https://reffo.ai" target="_blank" rel="noreferrer" style={{color:"var(--teal)",fontWeight:600,textDecoration:"none"}}>Reffo</a></div>
          <div className={styles.sectionDesc}>Two distinct brands. One builds the network; the other is an app on it.</div>
          <table className={styles.comparisonTable}>
            <thead>
              <tr><th></th><th>Pelagora</th><th>Reffo</th></tr>
            </thead>
            <tbody>
              <tr><td>What</td><td>The open-source network / protocol</td><td>A marketplace app built on Pelagora</td></tr>
              <tr><td>Audience</td><td>Developers, builders, contributors</td><td>End users buying &amp; selling items</td></tr>
              <tr><td>Voice</td><td>Builder-to-builder</td><td>Consumer-friendly</td></tr>
              <tr><td>Visual</td><td>Mediterranean + technical</td><td>Its own brand system</td></tr>
              <tr><td>Relationship</td><td>The platform</td><td>One of many apps on the platform</td></tr>
            </tbody>
          </table>
          <div className={styles.comparisonNote}>
            Pelagora and Reffo should never share branding in the same context. Reffo can be referenced as an example of what you can build on Pelagora, but it gets no visual preferential treatment over other example apps.
          </div>
        </div>
      </section>

      {/* DO'S AND DON'TS */}
      <section className={styles.dosDonts} id="dos-donts">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>09 — Usage Guidelines</div>
          <div className={styles.sectionTitle}>Do&apos;s and Don&apos;ts</div>
          <div className={styles.sectionDesc}>Quick reference for brand decisions.</div>
          <div className={styles.ddGrid}>
            <div className={`${styles.ddCol} ${styles.do}`}>
              <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg> Do</h3>
              {["Use the octopus mark consistently across all contexts","Lead with the builder narrative: \u201cwhat will you build?\u201d","Show real code and terminal output in marketing","Reference the Mediterranean aesthetic in illustration, not cliché","Keep copy concise — this audience scans"].map((item) => <div className={styles.ddItem} key={item}>{item}</div>)}
            </div>
            <div className={`${styles.ddCol} ${styles.dont}`}>
              <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg> Don&apos;t</h3>
              {["Use the Reffo logo alongside Pelagora as co-brands","Use stock photography of people in suits","Say \u201cblockchain\u201d or \u201cweb3\u201d — decentralized, not crypto","Over-explain what an AI agent is — the audience knows","Use gradients on the logo or write paragraphs when a code snippet would do"].map((item) => <div className={styles.ddItem} key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* ASSETS */}
      <section className={styles.assets} id="assets">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>10 — Asset Naming</div>
          <div className={styles.sectionTitle}>File conventions</div>
          <div className={styles.sectionDesc}>All brand assets follow this naming pattern for consistency across teams and tools.</div>
          <div className={styles.assetNaming}>
            <span className={styles.file}>pelagora-logo-primary</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-logo-mono-dark</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-logo-mono-light</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-mark-primary</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-wordmark</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-icon-[name]-[size]</span><span className={styles.ext}>.svg</span><br />
            <span className={styles.file}>pelagora-og-image</span><span className={styles.ext}>.png</span> <span style={{ color: "rgba(255,255,255,0.3)" }}>(1200×630)</span><br />
            <span className={styles.file}>pelagora-favicon</span><span className={styles.ext}>.png</span> <span style={{ color: "rgba(255,255,255,0.3)" }}>(32×32)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
