"use client";

import { useEffect, useState } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { getNavigationItems, siteConfig, socialLinks } from "@/data/portfolio";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const items = getNavigationItems();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
          : "border-transparent bg-[var(--background)]/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-[var(--foreground)]"
      >
        Skip to content
      </a>
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--foreground)]"
        >
          {siteConfig.name}
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
            {items.map((item) => {
              const isExternal =
                item.href.startsWith("http") || item.href.endsWith(".pdf");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                    {isExternal && socialLinks.cv ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <MobileNavigation items={items} />
      </div>
    </header>
  );
}
