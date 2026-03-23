"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/buy-or-sell", label: "Buy or Sell" },
  { href: "/build", label: "Build" },
  { href: "/contribute", label: "Contribute" },
  { href: "/blog", label: "Pelagora Blog" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="nav-links">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href || pathname.startsWith(href + "/") ? "nav-active" : ""}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
