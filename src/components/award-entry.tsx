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
    <article className="border-t border-[var(--border)] py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        {year ? (
          <p className="text-[13px] uppercase tracking-[0.1em] text-[var(--muted)]">
            {year}
          </p>
        ) : null}
      </div>
      {organisation ? (
        <p className="mt-1 text-[15px] text-[var(--muted)]">{organisation}</p>
      ) : null}
      {description ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </article>
  );
}
