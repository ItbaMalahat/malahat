type WritingEntryProps = {
  title: string;
  description: string;
  topic?: string;
  year?: string;
  url?: string;
};

export function WritingEntry({
  title,
  description,
  topic,
  year,
  url,
}: WritingEntryProps) {
  return (
    <article className="border-t border-[var(--border)] py-7 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
        {topic ? <span>{topic}</span> : null}
        {year ? <span>{year}</span> : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--heading)] sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
        {description}
      </p>
      {url ? (
        <p className="mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Read <span aria-hidden="true">↗</span>
          </a>
        </p>
      ) : null}
    </article>
  );
}
