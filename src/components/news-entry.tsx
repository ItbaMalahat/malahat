import type { NewsItem } from "@/types/portfolio";

export function NewsEntry(item: NewsItem) {
  return (
    <div className="news-content">
      <span className="date-text">{item.date}</span>
      <br />
      <span className="content-text">{item.body}</span>
    </div>
  );
}
