type AwardEntryProps = {
  title: string;
  organisation?: string;
  year?: string;
  description?: string;
};

export function AwardEntry({
  title,
  organisation,
  year,
  description,
}: AwardEntryProps) {
  return (
    <article className="grid gap-2 border-t border-[var(--border)] py-6 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8">
      <div>
        <h3 className="text-lg font-semibold text-[var(--heading)]">{title}</h3>
        {organisation ? (
          <p className="mt-1 text-[15px] text-[var(--muted)]">{organisation}</p>
        ) : null}
        {description ? (
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {year ? (
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
          {year}
        </p>
      ) : null}
    </article>
  );
}
