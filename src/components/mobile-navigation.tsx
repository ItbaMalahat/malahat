"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/types/portfolio";

type MobileNavigationProps = {
  items: NavItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--border)] bg-white/70 px-3 text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--foreground)]"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="absolute left-0 right-0 top-full border-b border-[var(--border)] bg-[var(--background)]/95 px-6 py-4 shadow-sm backdrop-blur"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block min-h-11 py-3 text-[15px] font-medium text-[var(--foreground)]"
                    onClick={() => setOpen(false)}
                    {...(item.href.startsWith("http") || item.href.endsWith(".pdf")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
