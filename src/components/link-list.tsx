import type { ExternalLink } from "@/types/portfolio";

type LinkListProps = {
  links: ExternalLink[];
};

export function LinkList({ links }: LinkListProps) {
  const availableLinks = links.filter((link) => Boolean(link.url));

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <p className="link-row">
      {availableLinks.map((link, index) => (
        <span key={link.label}>
          {index > 0 ? <span className="link-sep"> · </span> : null}
          <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        </span>
      ))}
    </p>
  );
}
