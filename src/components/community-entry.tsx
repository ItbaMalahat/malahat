import type { CommunityService } from "@/types/portfolio";

export function CommunityEntry(entry: CommunityService) {
  const heading = entry.title || entry.organisation;
  const metaLine = entry.title
    ? [entry.organisation, entry.period].filter(Boolean).join(" · ")
    : entry.period;

  return (
    <article className="entry">
      {metaLine ? <p className="institute-text">{metaLine}</p> : null}
      {heading ? <h3>{heading}</h3> : null}

      {entry.milestones ? (
        <ul className="milestones">
          {entry.milestones.map((milestone, index) => (
            <li className="milestone" key={index}>
              <span className="milestone-date">{milestone.date}</span>
              <p className="content-text">{milestone.text}</p>
            </li>
          ))}
        </ul>
      ) : null}

      <ul>
        {entry.bullets.map((bullet, index) => (
          <li key={index}>
            <p className="content-text">{bullet}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
