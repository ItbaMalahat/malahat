import { Tags } from "@/components/tags";
import type { ArticleEntry as ArticleEntryType } from "@/types/portfolio";

export function ArticleEntry(article: ArticleEntryType) {
  return (
    <article className="entry article-card">
      <h3>{article.title}</h3>
      <p className="content-text">{article.description}</p>
      <Tags tags={article.tags} />
      {article.url ? (
        <p className="link-row">
          <a
            className="link"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read <span aria-hidden="true">↗</span>
          </a>
        </p>
      ) : null}
    </article>
  );
}
