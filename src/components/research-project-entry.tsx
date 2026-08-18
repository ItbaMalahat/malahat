import { LinkList } from "@/components/link-list";
import { Tags } from "@/components/tags";
import type { ResearchProject } from "@/types/portfolio";

export function ResearchProjectEntry(project: ResearchProject) {
  return (
    <article className="entry">
      <h3>{project.title}</h3>
      <Tags tags={project.tags} />
      {project.body.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}
      {project.supervisors ? (
        <p className="content-text">{project.supervisors}</p>
      ) : null}
      {project.meta ? <p className="date-text">{project.meta}</p> : null}
      {project.statusNote ? (
        <p className="date-text">{project.statusNote}</p>
      ) : null}
      {project.links ? <LinkList links={project.links} /> : null}
    </article>
  );
}
