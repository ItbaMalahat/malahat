type TimelineEntryProps = {
  period: string;
  role: string;
  organisation: string;
  location?: string;
  description: string[];
  highlights?: string[];
  technologies?: string[];
};

export function TimelineEntry({
  period,
  role,
  organisation,
  location,
  description,
  highlights,
  technologies,
}: TimelineEntryProps) {
  return (
    <article className="grid gap-2 border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0 md:grid-cols-[160px_1fr] md:gap-10">
      <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] md:pt-1">
        {period}
      </p>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
          {role}
        </h3>
        <p className="mt-1 text-[16px] text-[var(--foreground)]">
          {organisation}
        </p>
        {location ? (
          <p className="mt-1 text-[14px] text-[var(--muted)]">{location}</p>
        ) : null}
        <div className="mt-4 max-w-3xl space-y-3 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {highlights && highlights.length > 0 ? (
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-[15px] leading-7 text-[var(--muted)]">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {technologies && technologies.length > 0 ? (
          <p className="mt-4 text-[14px] leading-7 text-[var(--muted)]">
            <span className="font-medium text-[var(--foreground)]">Tools:</span>{" "}
            {technologies.join(" · ")}
          </p>
        ) : null}
      </div>
    </article>
  );
}
