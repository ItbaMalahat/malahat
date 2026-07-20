import type { ExternalLink } from "@/types/portfolio";

type ProjectEntryProps = {
  title: string;
  category: string;
  description: string[];
  technologies?: string[];
  status?: string;
  links?: ExternalLink[];
};

export function ProjectEntry({
  title,
  category,
  description,
  technologies,
  status,
  links,
}: ProjectEntryProps) {
  return (
    <article className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          {category}
        </p>
        {status ? (
          <span className="border border-[var(--border)] bg-[var(--pale)] px-2 py-0.5 text-[12px] font-medium text-[var(--heading)]">
            {status}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--heading)]">
        {title}
      </h3>
      <div className="mt-4 max-w-3xl space-y-3 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {technologies && technologies.length > 0 ? (
        <p className="mt-4 text-[14px] leading-7 text-[var(--muted)]">
          <span className="font-medium text-[var(--foreground)]">
            Technologies:
          </span>{" "}
          {technologies.join(" · ")}
        </p>
      ) : null}
      {links && links.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
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
