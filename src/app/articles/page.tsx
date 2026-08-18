import type { Metadata } from "next";
import { ArticleEntry } from "@/components/article-entry";
import { PageHeader } from "@/components/page-header";
import { articles, articlesIntro, siteConfig, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Articles | ${siteConfig.name}`,
};

export default function ArticlesPage() {
  return (
    <div className="page">
      <PageHeader title="Articles" intro={articlesIntro.intro} />
      <div>
        {articles.map((article) => (
          <ArticleEntry key={article.title} {...article} />
        ))}
      </div>
      <p>
        <a
          className="link"
          href={socialLinks.medium}
          target="_blank"
          rel="noopener noreferrer"
        >
          All writing: Read on Medium <span aria-hidden="true">↗</span>
        </a>
      </p>
    </div>
  );
}
