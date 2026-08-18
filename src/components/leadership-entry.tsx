import type { LeadershipRole } from "@/types/portfolio";

export function LeadershipEntry(role: LeadershipRole) {
  return (
    <article className="entry">
      <h3>{role.organisation}</h3>
      {role.fullForm ? <p className="date-text">{role.fullForm}</p> : null}
      {role.title || role.period ? (
        <p className="institute-text">
          {role.title}
          {role.title && role.period ? " · " : ""}
          {role.period}
        </p>
      ) : null}
      {role.subRoles?.length ? (
        <ul className="milestones">
          {role.subRoles.map((sub) => (
            <li className="milestone" key={sub.title}>
              <p className="milestone-title">{sub.title}</p>
              <span className="milestone-date">{sub.period}</span>
              <p className="content-text">{sub.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {role.bullets.length ? (
        <ul>
          {role.bullets.map((bullet, index) => (
            <li key={index}>
              <p className="content-text">{bullet}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
