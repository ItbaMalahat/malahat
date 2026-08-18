import type { EducationEntry as EducationEntryType } from "@/types/portfolio";

export function EducationEntry(entry: EducationEntryType) {
  return (
    <article className="entry">
      <h3>{entry.institution}</h3>
      <p className="institute-text">
        {entry.degree} · {entry.period}
        {entry.location ? ` · ${entry.location}` : ""}
      </p>
      {entry.thesis ? (
        <p className="content-text">
          <strong>Undergraduate thesis:</strong> {entry.thesis}
          {entry.advisor ? (
            <>
              <br />
              <strong>Advisor:</strong> {entry.advisor}
            </>
          ) : null}
        </p>
      ) : null}
      {entry.body?.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}
      {entry.coursework ? (
        <p className="content-text">
          <strong>Relevant coursework:</strong> {entry.coursework.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
