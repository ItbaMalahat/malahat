"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/portfolio";

type NavListProps = {
  items: NavItem[];
};

export function NavList({ items }: NavListProps) {
  const pathname = usePathname();

  return (
    <nav className="navbar" aria-label="Main">
      {items.map((item) => {
        const isExternal = item.href.startsWith("http");
        const isActive = !isExternal && pathname === item.href;
        return isExternal ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "active" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
