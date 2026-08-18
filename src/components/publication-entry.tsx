import type { Publication } from "@/types/portfolio";

export function PublicationEntry(publication: Publication) {
  return (
    <article className="entry">
      <p className="date-text">{publication.kind}</p>
      <h3>{publication.title}</h3>
      {publication.authors ? (
        <p className="content-text">{publication.authors}</p>
      ) : null}
      {publication.venue ? (
        <p className="institute-text">{publication.venue}</p>
      ) : null}
      {publication.description ? (
        <p className="content-text">{publication.description}</p>
      ) : null}
      {publication.doiUrl ? (
        <p className="link-row">
          <a
            className="link"
            href={publication.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View paper <span aria-hidden="true">↗</span>
          </a>
        </p>
      ) : null}
    </article>
  );
}
