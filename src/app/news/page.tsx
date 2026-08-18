import type { Metadata } from "next";
import { NewsEntry } from "@/components/news-entry";
import { PageHeader } from "@/components/page-header";
import { news, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `News | ${siteConfig.name}`,
};

export default function NewsPage() {
  return (
    <div className="page">
      <PageHeader title="News" />
      <div>
        {news.map((item, index) => (
          <NewsEntry key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
