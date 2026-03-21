-- Seed the 4 initial Pelagora blog posts.
-- Run this in the Supabase SQL editor (or via psql) against the pelagora_blog_posts table.
-- Safe to run multiple times — uses ON CONFLICT DO NOTHING.

INSERT INTO pelagora_blog_posts (id, title, slug, content, image_url, status, published_at, created_at)
VALUES

(
  gen_random_uuid(),
  'Building your first Beacon node in 10 minutes',
  'building-your-first-beacon-node-10-minutes',
  E'## What is a Beacon?\n\nA Beacon is a lightweight server you run locally. It connects to the Pelagora mesh via [DHT](https://docs.pelagora.org/pelagora/dht-networking) — no central registry, no account required. Think of it like BitTorrent, but for commerce listings.\n\n## Prerequisites\n\n- Node.js 18+ (check with `node -v`)\n- The [Pelagora Skill](https://pelagora.org/dev-resources/pelagora.md) (a markdown file you hand to your AI agent)\n\n## Step 1 — Hand the Skill to your agent\n\nDownload `pelagora.md` and drop it into your Claude or ChatGPT conversation:\n\n```\nYou are a Pelagora setup agent. Follow the instructions in the attached skill file.\n```\n\nYour AI will handle the rest. It reads the skill, runs the installer, and confirms when your Beacon is live.\n\n## Step 2 — Verify the connection\n\nOnce the agent finishes, check your Beacon is on the mesh:\n\n```bash\ncurl http://localhost:3000/api/status\n# → { "beacon": "online", "peers": 7, "mesh": "pelagora-mainnet" }\n```\n\nIf you see `peers: 0`, give it 30 seconds — DHT discovery takes a moment on first boot.\n\n## Step 3 — Create your first listing\n\n```bash\ncurl -X POST http://localhost:3000/api/refs \\\n  -H "Content-Type: application/json" \\\n  -d ''{"name": "Vintage Leica M6", "price": 1200, "currency": "USD"}''\n```\n\nThe Beacon returns a `ref_id` and immediately broadcasts it to peers. Anyone browsing the mesh can now discover your listing.\n\n## What''s next?\n\n- **Install Skills** — add auction, rental, or group-buy logic to your Beacon\n- **Browse the mesh** — `GET /api/browse` returns listings from nearby peers\n- **Read the docs** — [docs.pelagora.org](https://docs.pelagora.org) has the full API reference\n\n> **Tip:** Keep your Beacon running in a tmux session or systemd service so it stays discoverable around the clock.',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80',
  'published',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days'
),

(
  gen_random_uuid(),
  'How DHT peer discovery works in Pelagora',
  'how-dht-peer-discovery-works-pelagora',
  E'## The problem with centralized marketplaces\n\nEvery major marketplace — eBay, Etsy, Amazon — operates the same way: sellers upload listings to *the platform''s* database, and buyers search *the platform''s* index. That means the platform controls discovery, pricing visibility, fees, and ultimately who can participate.\n\nPelagora takes a different approach: **there is no central index**. Instead, Beacons find each other the same way BitTorrent nodes do — via a Distributed Hash Table.\n\n## What is a DHT?\n\nA Distributed Hash Table is a key-value store spread across thousands of nodes. No single node holds the full picture. When you look something up, the request is routed hop-by-hop until it reaches the node closest to that key.\n\n```\nYou → Node A → Node C → Node F (holds the key)\n                ↓\n            Node D (closer, redirects)\n```\n\nPelagora uses [libp2p''s Kademlia DHT](https://docs.libp2p.io/concepts/discovery-routing/kademlia/) under the hood — the same protocol powering IPFS and Ethereum''s peer layer.\n\n## How Beacons announce themselves\n\nWhen your Beacon starts, it:\n\n1. Generates a stable **Peer ID** from a local keypair\n2. Announces itself to the DHT under a well-known Pelagora namespace key\n3. Begins answering `FIND_NODE` requests from other Beacons\n\n```bash\n# You can inspect your Peer ID\ncurl http://localhost:3000/api/identity\n# → { "peerId": "12D3KooW...", "addrs": ["/ip4/..."] }\n```\n\n## Schema.org listings\n\nOnce peers discover each other, they exchange listing data encoded as [Schema.org](https://schema.org/Offer) `Offer` objects. This makes Pelagora listings inherently machine-readable — AI agents can browse, filter, and negotiate without any custom API contract.\n\n```json\n{\n  "@type": "Offer",\n  "name": "Channel Islands Surfboard",\n  "price": "450",\n  "priceCurrency": "USD",\n  "availability": "InStock",\n  "seller": { "@type": "Person", "identifier": "12D3KooW..." }\n}\n```\n\n## Privacy considerations\n\nYour IP address is visible to peers you connect with — the same trade-off as any P2P protocol. If you need privacy, run your Beacon behind a [Tor hidden service](https://www.torproject.org/) or a VPN. We''re exploring onion-routing options for a future release.',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
  'published',
  NOW() - INTERVAL '9 days',
  NOW() - INTERVAL '9 days'
),

(
  gen_random_uuid(),
  'Writing your first Pelagora Skill',
  'writing-your-first-pelagora-skill',
  E'## What is a Skill?\n\nSkills are Markdown files. That''s it. They contain structured instructions that an AI agent can read and execute to extend a Beacon''s capabilities.\n\nThe canonical example is `pelagora.md` — the bootstrap Skill that installs and configures a Beacon from scratch. But Skills can do anything: add auction logic, manage rental calendars, run group buys, handle escrow.\n\n## Anatomy of a Skill\n\nA Skill file has three sections:\n\n### 1. Context block\n\n```markdown\n# Pelagora Reverse Auction Skill\n\n**Version:** 1.2.0\n**Requires:** Pelagora Beacon ≥ 0.8.0\n**Author:** ReffoAI\n```\n\n### 2. Instructions\n\nPlain English steps the AI follows. Be explicit — your agent will read this literally.\n\n```markdown\n## Setup\n\n1. Check that the Beacon is running: GET /api/status\n2. Register the auction extension: POST /api/skills/register { "skill": "reverse-auction" }\n3. Confirm registration: GET /api/skills → array should include "reverse-auction"\n```\n\n### 3. API reference\n\nInline OpenAPI-style docs so the agent knows the exact shape of requests.\n\n## Testing your Skill\n\nThe fastest way to test is to paste the Skill file into Claude and say:\n\n> "Follow this Skill against a Beacon running at localhost:3000."\n\nWatch what the agent does. If it gets confused or makes a wrong API call, rewrite that section of the Skill to be more explicit.\n\n## Publishing\n\nOnce your Skill works, open a PR to the [ReffoAI Skills registry](https://github.com/ReffoAI/skills). Community members can then install it with a single line:\n\n```bash\ncurl https://skills.pelagora.org/reverse-auction.md > reverse-auction.md\n# Then hand it to your agent\n```\n\n> **Tip:** Keep Skills focused. A Skill that does one thing well is far more reliable than one that tries to do everything.',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  'published',
  NOW() - INTERVAL '21 days',
  NOW() - INTERVAL '21 days'
),

(
  gen_random_uuid(),
  'Pelagora 0.9 — mesh upgrades and Schema.org improvements',
  'pelagora-0-9-mesh-upgrades-schema-org-improvements',
  E'## Release summary\n\nPelagora 0.9 ships a major upgrade to the mesh routing layer, expands Schema.org support, and introduces the new `pelagora.md` v2 Skill format. Here''s what changed.\n\n## Mesh routing — faster peer discovery\n\nPrevious versions used a naive flood-fill for initial peer discovery: a new Beacon would broadcast to all known peers and wait. On a large mesh, this caused noticeable startup lag.\n\n0.9 switches to **iterative Kademlia lookup**. The Beacon now queries the 3 peers closest to its own ID, refines the result set, and converges in O(log n) hops instead of O(n).\n\nBenchmark on a 500-node testnet:\n\n| Metric | 0.8 | 0.9 |\n|--------|-----|-----|\n| Time to first peer | 4.2s | 0.8s |\n| Peers found in 10s | 12 | 41 |\n| Bandwidth on startup | 2.4 MB | 0.3 MB |\n\n## Expanded Schema.org types\n\nListings now support the full [Schema.org Product](https://schema.org/Product) hierarchy, not just `Offer`. This means your Beacon can advertise richer metadata:\n\n```json\n{\n  "@type": "Product",\n  "name": "Patagonia Black Hole Duffel 55L",\n  "brand": { "@type": "Brand", "name": "Patagonia" },\n  "offers": {\n    "@type": "Offer",\n    "price": "85.00",\n    "priceCurrency": "USD",\n    "itemCondition": "https://schema.org/UsedCondition"\n  }\n}\n```\n\n## Skill format v2\n\nThe new `pelagora.md` v2 format adds a machine-readable frontmatter block:\n\n```yaml\n---\nskill: pelagora-setup\nversion: 2.0.0\nrequires:\n  node: ">=18"\n  beacon: ">=0.9.0"\n---\n```\n\nThis lets agents validate compatibility before executing — no more mid-install failures on older Beacons.\n\n## Upgrade\n\n```bash\nnpx create-reffo-beacon@latest update\n```\n\nOr grab the new [pelagora.md](https://pelagora.org/dev-resources/pelagora.md) and hand it to your agent — it will detect the existing installation and upgrade in place.\n\n## What''s next\n\n0.10 will focus on escrow primitives and multi-party negotiation. Follow along on [GitHub](https://github.com/ReffoAI) or join the [community discussions](https://github.com/orgs/ReffoAI/discussions).',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  'published',
  NOW() - INTERVAL '35 days',
  NOW() - INTERVAL '35 days'
)

ON CONFLICT (slug) DO NOTHING;
