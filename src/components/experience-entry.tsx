import type { ExperienceEntry as ExperienceEntryType } from "@/types/portfolio";

export function ExperienceEntry(entry: ExperienceEntryType) {
  return (
    <article className="entry entry-grid">
      <p className="date-text entry-period">{entry.period}</p>
      <div>
        <h3>{entry.role}</h3>
        <p className="institute-text">
          {entry.organisation}
          {entry.location ? ` · ${entry.location}` : ""}
        </p>
        {entry.advisor ? (
          <p className="date-text">Advised by {entry.advisor}</p>
        ) : null}
        <ul>
          {entry.bullets.map((bullet, index) => (
            <li key={index}>
              <p className="content-text">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
