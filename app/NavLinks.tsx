"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/ai-skill", label: "AI Skill" },
  { href: "/buy-or-sell", label: "Buy or Sell" },
  { href: "/build", label: "Build" },
  { href: "/contribute", label: "Contribute" },
  { href: "/blog", label: "Pelagora Blog" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
      </button>
      <div className={`nav-links${open ? " nav-links-open" : ""}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href || pathname.startsWith(href + "/") ? "nav-active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
