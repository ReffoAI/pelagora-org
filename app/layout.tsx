import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import type { ReactNode } from "react";

export const metadata = {
  title: "Pelagora — The Open Source Commerce Network",
  description: "Build commerce apps on a decentralized network. Grab the Skill, spin up a Beacon, start building.",
  icons: { icon: "/l_favicon.ico" },
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
              <Image src="/images/pelagora-logo_reverse_sm.png" alt="Pelagora" width={30} height={30} style={{ height: 30, width: "auto" }} />
              <span>PELAGORA</span>
            </Link>
            <NavLinks />
          </div>
        </nav>
        {children}
        <footer>
          <div className="container">
            <div className="footer-brand">
              <Image src="/images/pelagora-logo_reverse_sm.png" alt="Pelagora" width={24} height={24} style={{ height: 24, width: "auto" }} />
              <span>Pelagora</span>
            </div>
            <p>Open source commerce for builders. &copy; 2026</p>
            <p>Questions? Find us on <a href="https://discord.gg/CfBVrPAC" target="_blank" rel="noreferrer">Discord</a>, or reach out at <a href="mailto:hello@reffo.ai">hello@reffo.ai</a>.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
