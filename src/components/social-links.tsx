import { getAvailableSocialLinks } from "@/data/portfolio";

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = getAvailableSocialLinks();

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex min-h-11 items-center gap-1 text-[15px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {link.label}
            {link.external ? <span aria-hidden="true">↗</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
