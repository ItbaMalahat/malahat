import type { ExternalLink } from "@/types/portfolio";

type PublicationEntryProps = {
  year: string;
  venue?: string;
  title: string;
  authors: string;
  description?: string;
  type?: string;
  links?: ExternalLink[];
  isThesis?: boolean;
};

export function PublicationEntry({
  year,
  venue,
  title,
  authors,
  description,
  type,
  links,
  isThesis,
}: PublicationEntryProps) {
  return (
    <article className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
          {isThesis ? "Undergraduate Thesis" : year}
        </p>
        {type && !isThesis ? (
          <span className="rounded-sm bg-[var(--accent-soft)] px-2 py-0.5 text-[12px] font-medium text-[var(--accent)]">
            {type}
          </span>
        ) : null}
        {isThesis ? (
          <span className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[12px] font-medium text-[var(--muted)]">
            Not peer-reviewed
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--foreground)] sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-[15px] text-[var(--muted)]">{authors}</p>
      {venue ? (
        <p className="mt-1 text-[14px] italic text-[var(--muted)]">{venue}</p>
      ) : null}
      {description ? (
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
      {links && links.length > 0 ? (
        <ul className="mt-4 space-y-1 pl-1">
          {links.map((link) => (
            <li key={`${title}-${link.label}`}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[14px] text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
