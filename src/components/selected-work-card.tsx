import { Tags } from "@/components/tags";
import type { SelectedWorkItem } from "@/types/portfolio";

export function SelectedWorkCard(item: SelectedWorkItem) {
  return (
    <article className="entry work-card">
      <h3>{item.title}</h3>
      <p className="content-text">{item.description}</p>
      <Tags tags={item.tags} />
    </article>
  );
}
