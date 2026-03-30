import { TrackedLink } from "@/components/TrackedLink";
import styles from "./about.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  title: "About — Pelagora",
  description:
    "Commerce is a human right — not a subscription. Pelagora is an open protocol for peer-to-peer commerce that belongs to everyone and is controlled by no one.",
  openGraph: {
    title: "About — Pelagora",
    description:
      "Commerce is a human right — not a subscription. Pelagora is an open protocol for peer-to-peer commerce that belongs to everyone and is controlled by no one.",
    url: `${siteUrl}/about`,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/pelagora-og.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Pelagora",
    description:
      "Commerce is a human right — not a subscription. Pelagora is an open protocol for peer-to-peer commerce that belongs to everyone and is controlled by no one.",
    images: [`${siteUrl}/images/pelagora-og.jpg`],
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/local_artist.png"
          alt=""
          aria-hidden="true"
          className="hero-side-img"
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">About Pelagora</div>
          <h1 style={{ maxWidth: 700 }}>
            Commerce is a human right&nbsp;&mdash; <em>not a subscription.</em>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 640 }}>
            It started with a question: why does selling a $20 item online take
            13% in fees? Why does a platform need your name, your address, your
            browsing history, and your payment details just so two people can
            exchange goods?
          </p>
          <p className="hero-sub" style={{ maxWidth: 640, marginTop: 0 }}>
            The answer is: it doesn&apos;t.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="detail sand">
        <div className="container">
          <div className="section-label" style={{ maxWidth: 700, margin: "0 auto 12px", textAlign: "left" }}>Our Story</div>
          <div className="section-title" style={{ maxWidth: 700, margin: "0 auto 32px", textAlign: "left" }}>Trade used to be simple</div>
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.85,
              fontSize: "1.08rem",
            }}
          >
            <p>
              For most of history, trade was simple. Two people met, agreed on a
              price, and exchanged value. No platform took 15%. No algorithm
              decided who could see your listing. No corporation harvested your
              purchase history to sell to the highest bidder.
            </p>
            <p style={{ marginTop: 24 }}>
              Then the internet came along and, instead of making trade{" "}
              <em>more</em> free, it concentrated it. A handful of companies
              became the tollbooths of commerce&nbsp;&mdash; extracting fees,
              hoarding data, and dictating the rules for billions of transactions
              they have no part in.
            </p>
            <p style={{ marginTop: 24 }}>
              Now those same tollbooths are rebranding. They&apos;re wrapping
              closed systems in the language of &ldquo;protocols&rdquo; and
              &ldquo;agents&rdquo;&nbsp;&mdash; but the architecture hasn&apos;t
              changed. The built-in AI that seems to make your life easier is
              actually working for The Platform that controls it. Your data feeds
              that Platform. The seller gets convenience; the platform gets
              control. A protocol you can&apos;t fork isn&apos;t a protocol.
              It&apos;s a private API with better marketing.
            </p>
            <p style={{ marginTop: 24, fontWeight: 700, fontSize: "1.18rem" }}>
              We built Pelagora because open commerce shouldn&apos;t need
              anyone&apos;s permission&nbsp;&mdash; or anyone&apos;s proprietary
              infrastructure.
            </p>
            <p style={{ marginTop: 24 }}>
              Pelagora is an open protocol&nbsp;&mdash; not a platform, not a
              company, not an app with a business model hiding behind a friendly
              UI. It&apos;s infrastructure for trade that belongs to everyone and
              is controlled by no one.
            </p>
            <p style={{ marginTop: 24 }}>
              You run a node. You list your goods. You trade directly with other
              people. Your data stays yours. Your customers stay yours. The tools
              you build on top are <em>yours</em>.
            </p>
            <p style={{ marginTop: 24 }}>
              We didn&apos;t build this to compete with marketplaces. We built it
              to make them optional.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES PELAGORA DIFFERENT */}
      <section className="ideas" style={{ background: "var(--marble)" }}>
        <div className="container">
          <div className="section-label">Open by Design</div>
          <div className="section-title">What makes Pelagora different</div>
          <div className="ideas-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="idea-card" style={{ background: "var(--sand)" }}>
              <div className="idea-card-icon ocean">🔓</div>
              <h3>Open Protocol</h3>
              <p>
                <a href="https://docs.pelagora.org/glossary/pim-protocol/" target="_blank" rel="noreferrer">PIM is a public protocol</a> anyone can implement, extend, or fork.
                No licensing, no API keys, no terms of service.
              </p>
            </div>
            <div className="idea-card" style={{ background: "var(--sand)" }}>
              <div className="idea-card-icon teal">🖥️</div>
              <h3>Run Your Own Node</h3>
              <p>
                Your Beacon is your node on the network. You control it, you own
                the data on it, and no one can revoke your access.
              </p>
            </div>
            <div className="idea-card" style={{ background: "var(--sand)" }}>
              <div className="idea-card-icon terra">🤖</div>
              <h3>AI as a Peer</h3>
              <p>
                Agents are first-class participants on the network. They
                don&apos;t go through a corporate API&nbsp;&mdash; they join
                directly, on equal footing.
              </p>
            </div>
            <div className="idea-card" style={{ background: "var(--sand)" }}>
              <div className="idea-card-icon mixed">🚫</div>
              <h3>No Tollbooth</h3>
              <p>
                No transaction fees. No data harvesting. No algorithm deciding
                who gets visibility. The network has no owner to extract from it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE NAME */}
      <section className="detail sand" style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ancient_agora.png"
          alt=""
          aria-hidden="true"
          className={styles.agoraImg}
        />

        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">The Name</div>
          <div className="section-title">Why &ldquo;Pelagora&rdquo;</div>
          <div
            style={{
              maxWidth: 640,
              margin: "24px auto 0",
              lineHeight: 1.75,
              fontSize: "1.08rem",
            }}
          >
            <p>
              We named it after the <em>agora</em>&nbsp;&mdash; the ancient Greek
              marketplace where anyone could show up, set out their wares, and do
              business. No membership fee. No terms of service. Just people
              trading freely.
            </p>
            <p
              style={{
                marginTop: 32,
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              The agora was open to all. The internet should be too.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>
            Ready to build on
            <br />
            <em>open rails?</em>
          </h2>
          <p>
            Run a Beacon, list your first Ref, or read the protocol spec. The
            network is live and open.
          </p>
          <div className="cta-actions">
            <TrackedLink
              href="/build"
              className="btn btn-primary"
              event="hero_cta_clicked"
              eventProps={{ page: "about", cta_label: "Start Building", destination: "/build" }}
            >
              Start Building
            </TrackedLink>
            <TrackedLink
              href="https://docs.pelagora.org"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              event="docs_clicked"
              eventProps={{ source_page: "about" }}
            >
              Read the Docs
            </TrackedLink>
          </div>
          <div className="cta-links">
            <a href="https://github.com/ReffoAI" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              GitHub
            </a>
            <a href="/contribute">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Contribute
            </a>
            <TrackedLink
              href="https://discord.gg/CfBVrPAC"
              target="_blank"
              rel="noreferrer"
              event="discord_clicked"
              eventProps={{ source_page: "about" }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Discord
            </TrackedLink>
            <a href="/blog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              Blog
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
