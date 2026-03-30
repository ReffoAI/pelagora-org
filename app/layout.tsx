import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { Analytics } from "@vercel/analytics/react";
import { TrackedLink } from "@/components/TrackedLink";
import type { ReactNode } from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelagora.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pelagora — Decentralized Commerce, Built by You",
  description: "Every node is a marketplace. Grab the AI Skill, spin up a Beacon, and start building on the open source network.",
  icons: {
    icon: [
      { url: "/l_favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/d_favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pelagora — Decentralized Commerce, Built by You",
    description: "Every node is a marketplace. Grab the AI Skill, spin up a Beacon, and start building on the open source network.",
    url: siteUrl,
    siteName: "Pelagora",
    images: [{ url: `${siteUrl}/images/pelagora-og.jpg`, width: 1300, height: 682, alt: "Pelagora — Decentralized Commerce, Built by You" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelagora — Decentralized Commerce, Built by You",
    description: "Every node is a marketplace. Grab the AI Skill, spin up a Beacon, and start building on the open source network.",
    images: [`${siteUrl}/images/pelagora-og.jpg`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Fira+Sans:wght@700&family=JetBrains+Mono:wght@400;500&family=Josefin+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav>
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              <Image src="/images/pelagora-logo_reverse_sm.png" alt="Pelagora" width={30} height={30} priority style={{ height: 30, width: "auto" }} />
              <span>PELAGORA</span>
            </Link>
            <NavLinks />
          </div>
        </nav>
        {children}
        <Analytics />
        <footer>
          <div className="container">
            <div className="footer-brand">
              <Image src="/images/pelagora-logo_reverse_sm.png" alt="Pelagora" width={24} height={24} style={{ height: 24, width: "auto" }} />
              <span>Pelagora</span>
            </div>
            <p>Open source commerce for builders. &copy; 2026</p>
            <p>Questions? Find us on <TrackedLink href="https://discord.gg/CfBVrPAC" target="_blank" rel="noreferrer" event="discord_clicked" eventProps={{ source_page: "footer" }}>Discord</TrackedLink>, or reach out at <a href="mailto:hello@reffo.ai">hello@reffo.ai</a>.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
