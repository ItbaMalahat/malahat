import { footer } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 md:px-10">
        <p className="text-[14px] text-[var(--muted)]">{footer.copyright}</p>
        <p className="max-w-2xl text-[14px] leading-7 text-[var(--muted)]">
          {footer.line}
        </p>
      </div>
    </footer>
  );
}
