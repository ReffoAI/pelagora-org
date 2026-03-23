export type MockPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  published_at: string;
};

export const MOCK_POSTS: MockPost[] = [
  {
    id: "sample-published-1",
    title: "Building your first Beacon node in 10 minutes",
    slug: "building-your-first-beacon-node-10-minutes",
    image_url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    content: `## What is a Beacon?

A Beacon is a lightweight server you run locally. It connects to the Pelagora mesh via [DHT](https://docs.pelagora.org/pelagora/dht-networking) — no central registry, no account required. Think of it like BitTorrent, but for commerce listings.

## Prerequisites

- Node.js 18+ (check with \`node -v\`)
- The [Pelagora Skill](https://pelagora.org/dev-resources/pelagora.md) (a markdown file you hand to your AI agent)

## Step 1 — Hand the Skill to your agent

Download \`pelagora.md\` and drop it into your Claude or ChatGPT conversation:

\`\`\`
You are a Pelagora setup agent. Follow the instructions in the attached skill file.
\`\`\`

Your AI will handle the rest. It reads the skill, runs the installer, and confirms when your Beacon is live.

## Step 2 — Verify the connection

Once the agent finishes, check your Beacon is on the mesh:

\`\`\`bash
curl http://localhost:3000/api/status
# → { "beacon": "online", "peers": 7, "mesh": "pelagora-mainnet" }
\`\`\`

If you see \`peers: 0\`, give it 30 seconds — DHT discovery takes a moment on first boot.

## Step 3 — Create your first listing

\`\`\`bash
curl -X POST http://localhost:3000/api/refs \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Vintage Leica M6", "price": 1200, "currency": "USD"}'
\`\`\`

The Beacon returns a \`ref_id\` and immediately broadcasts it to peers. Anyone browsing the mesh can now discover your listing.

## What's next?

- **Install Skills** — add auction, rental, or group-buy logic to your Beacon
- **Browse the mesh** — \`GET /api/browse\` returns listings from nearby peers
- **Read the docs** — [docs.pelagora.org](https://docs.pelagora.org) has the full API reference

> **Tip:** Keep your Beacon running in a tmux session or systemd service so it stays discoverable around the clock.
`,
  },
  {
    id: "sample-published-2",
    title: "How DHT peer discovery works in Pelagora",
    slug: "how-dht-peer-discovery-works-pelagora",
    image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toISOString(),
    content: `## The problem with centralized marketplaces

Every major marketplace — eBay, Etsy, Amazon — operates the same way: sellers upload listings to *the platform's* database, and buyers search *the platform's* index. That means the platform controls discovery, pricing visibility, fees, and ultimately who can participate.

Pelagora takes a different approach: **there is no central index**. Instead, Beacons find each other the same way BitTorrent nodes do — via a Distributed Hash Table.

## What is a DHT?

A Distributed Hash Table is a key-value store spread across thousands of nodes. No single node holds the full picture. When you look something up, the request is routed hop-by-hop until it reaches the node closest to that key.

\`\`\`
You → Node A → Node C → Node F (holds the key)
                ↓
            Node D (closer, redirects)
\`\`\`

Pelagora uses [libp2p's Kademlia DHT](https://docs.libp2p.io/concepts/discovery-routing/kademlia/) under the hood — the same protocol powering IPFS and Ethereum's peer layer.

## How Beacons announce themselves

When your Beacon starts, it:

1. Generates a stable **Peer ID** from a local keypair
2. Announces itself to the DHT under a well-known Pelagora namespace key
3. Begins answering \`FIND_NODE\` requests from other Beacons

\`\`\`bash
# You can inspect your Peer ID
curl http://localhost:3000/api/identity
# → { "peerId": "12D3KooW...", "addrs": ["/ip4/..."] }
\`\`\`

## Schema.org listings

Once peers discover each other, they exchange listing data encoded as [Schema.org](https://schema.org/Offer) \`Offer\` objects. This makes Pelagora listings inherently machine-readable — AI agents can browse, filter, and negotiate without any custom API contract.

\`\`\`json
{
  "@type": "Offer",
  "name": "Channel Islands Surfboard",
  "price": "450",
  "priceCurrency": "USD",
  "availability": "InStock",
  "seller": { "@type": "Person", "identifier": "12D3KooW..." }
}
\`\`\`

## Privacy considerations

Your IP address is visible to peers you connect with — the same trade-off as any P2P protocol. If you need privacy, run your Beacon behind a [Tor hidden service](https://www.torproject.org/) or a VPN. We're exploring onion-routing options for a future release.
`,
  },
  {
    id: "sample-published-3",
    title: "Writing your first Pelagora Skill",
    slug: "writing-your-first-pelagora-skill",
    image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toISOString(),
    content: `## What is a Skill?

Skills are Markdown files. That's it. They contain structured instructions that an AI agent can read and execute to extend a Beacon's capabilities.

The canonical example is [\`pelagora.md\`](/pelagora.md) — the bootstrap Skill that installs and configures a Beacon from scratch. But Skills can do anything: add auction logic, manage rental calendars, run group buys, handle escrow.

## Who writes Skills?

Three kinds of people tend to reach for Skill authoring:

**Developers building commerce apps on Pelagora.** If you're building a rental platform, a local marketplace, or anything on top of the network, you'll eventually want logic that lives outside your Beacon's core — bidding rules, escrow flows, access control. Skills let you package that logic in a way that AI agents can execute without custom integrations.

**AI power users who want to automate buying or selling.** If you already use Claude, ChatGPT, or another agent day-to-day, a Skill is how you give it Pelagora-specific superpowers. Instead of explaining Pelagora's API every time, you write the Skill once and hand it to your agent whenever you need it.

**Community contributors.** The Skills registry is community-driven. If you've figured out a workflow — reverse auctions, subscription gating, group buys — packaging it as a Skill lets anyone else on the network use it with a single download.

You don't need to be a seasoned engineer. If you can write clear instructions and basic JSON, you can write a Skill.

## Anatomy of a Skill

A Skill file has three sections:

### 1. Context block

\`\`\`markdown
# Pelagora Reverse Auction Skill

**Version:** 1.2.0
**Requires:** Pelagora Beacon ≥ 0.8.0
**Author:** ReffoAI
\`\`\`

### 2. Instructions

Plain English steps the AI follows. Be explicit — your agent will read this literally.

\`\`\`markdown
## Setup

1. Check that the Beacon is running: GET /api/status
2. Register the auction extension: POST /api/skills/register { "skill": "reverse-auction" }
3. Confirm registration: GET /api/skills → array should include "reverse-auction"
\`\`\`

### 3. API reference

Inline OpenAPI-style docs so the agent knows the exact shape of requests:

\`\`\`markdown
### POST /api/auction/create

Creates a reverse auction where sellers compete to offer the lowest price.

**Body:**
\`\`\`json
{
  "item": "string",       // what the buyer wants
  "budget": "number",     // buyer's max price
  "deadline": "ISO8601"   // when the auction closes
}
\`\`\`
\`\`\`

## Testing your Skill

The fastest way to test is to paste the Skill file into Claude and say:

> "Follow this Skill against a Beacon running at localhost:3000."

Watch what the agent does. If it gets confused or makes a wrong API call, rewrite that section of the Skill to be more explicit.

## Publishing

Once your Skill works, open a PR to the [ReffoAI Skills registry](https://github.com/ReffoAI/skills). Community members can then install it with a single line:

\`\`\`bash
curl https://skills.pelagora.org/reverse-auction.md > reverse-auction.md
# Then hand it to your agent
\`\`\`

> **Tip:** Keep Skills focused. A Skill that does one thing well is far more reliable than one that tries to do everything.
`,
  },
  {
    id: "sample-published-4",
    title: "Pelagora 0.9 — mesh upgrades and Schema.org improvements",
    slug: "pelagora-0-9-mesh-upgrades-schema-org-improvements",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 35).toISOString(),
    content: `## Release summary

Pelagora 0.9 ships a major upgrade to the mesh routing layer, expands Schema.org support, and introduces the new \`pelagora.md\` v2 Skill format. Here's what changed.

## Mesh routing — faster peer discovery

Previous versions used a naive flood-fill for initial peer discovery: a new Beacon would broadcast to all known peers and wait. On a large mesh, this caused noticeable startup lag.

0.9 switches to **iterative Kademlia lookup**. The Beacon now queries the 3 peers closest to its own ID, refines the result set, and converges in O(log n) hops instead of O(n).

Benchmark on a 500-node testnet:

| Metric | 0.8 | 0.9 |
|--------|-----|-----|
| Time to first peer | 4.2s | 0.8s |
| Peers found in 10s | 12 | 41 |
| Bandwidth on startup | 2.4 MB | 0.3 MB |

## Expanded Schema.org types

Listings now support the full [Schema.org Product](https://schema.org/Product) hierarchy, not just \`Offer\`. This means your Beacon can advertise richer metadata:

\`\`\`json
{
  "@type": "Product",
  "name": "Patagonia Black Hole Duffel 55L",
  "brand": { "@type": "Brand", "name": "Patagonia" },
  "offers": {
    "@type": "Offer",
    "price": "85.00",
    "priceCurrency": "USD",
    "itemCondition": "https://schema.org/UsedCondition"
  }
}
\`\`\`

AI agents browsing the mesh can now filter by brand, condition, and product category without any custom parsing.

## Skill format v2

The new \`pelagora.md\` v2 format adds a machine-readable frontmatter block:

\`\`\`yaml
---
skill: pelagora-setup
version: 2.0.0
requires:
  node: ">=18"
  beacon: ">=0.9.0"
---
\`\`\`

This lets agents validate compatibility before executing — no more mid-install failures on older Beacons.

## Upgrade

\`\`\`bash
npx create-reffo-beacon@latest update
\`\`\`

Or grab the new [pelagora.md](https://pelagora.org/dev-resources/pelagora.md) and hand it to your agent — it will detect the existing installation and upgrade in place.

## What's next

0.10 will focus on escrow primitives and multi-party negotiation. Follow along on [GitHub](https://github.com/ReffoAI) or join the [community discussions](https://github.com/orgs/ReffoAI/discussions).
`,
  },
];
