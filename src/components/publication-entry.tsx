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

function emphasiseAuthor(authors: string) {
  const parts = authors.split(/(Itba Malahat)/g);
  return parts.map((part, index) =>
    part === "Itba Malahat" ? (
      <span key={`${part}-${index}`} className="author-emphasis">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

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
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          {isThesis ? "Undergraduate Thesis" : year}
        </p>
        {venue ? (
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
            {venue}
          </p>
        ) : null}
        {type && !isThesis ? (
          <span className="text-[12px] text-[var(--muted)]">{type}</span>
        ) : null}
      </div>
      <h3 className="mt-3 max-w-3xl text-lg font-semibold leading-snug text-[var(--heading)] sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
        {emphasiseAuthor(authors)}
      </p>
      {description ? (
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
      {links && links.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 pl-0">
          {links.map((link) => (
            <li key={`${title}-${link.label}`}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[14px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
