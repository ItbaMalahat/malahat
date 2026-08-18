import type { ExternalLink } from "@/types/portfolio";

type LinkListProps = {
  links: ExternalLink[];
};

export function LinkList({ links }: LinkListProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <p className="link-row">
      {links.map((link, index) => (
        <span key={link.label}>
          {index > 0 ? <span className="link-sep"> · </span> : null}
          {link.url ? (
            <a
              className="link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="link link-pending" aria-disabled="true">
              {link.label} <span className="link-pending-note">(coming soon)</span>
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
