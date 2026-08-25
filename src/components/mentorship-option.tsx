import type { MentorshipOption } from "@/types/portfolio";

export function MentorshipOptionCard(option: MentorshipOption) {
  return (
    <article className="card-section mentorship-card">
      <p className="date-text">
        {option.number} — {option.duration}
      </p>
      <h3>{option.title}</h3>

      {option.intro.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}

      {option.topics?.length ? (
        <>
          {option.topicsLabel ? (
            <p className="content-text">
              <strong>{option.topicsLabel}</strong>
            </p>
          ) : null}
          <ul>
            {option.topics.map((topic) => (
              <li key={topic}>
                <p className="content-text">{topic}</p>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {option.note ? <p className="content-text lede">{option.note}</p> : null}

      <p className="link-row">
        <a
          className="button-link"
          href={option.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {option.buttonLabel} <span aria-hidden="true">→</span>
        </a>
      </p>
    </article>
  );
}
