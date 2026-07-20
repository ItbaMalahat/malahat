type WritingEntryProps = {
  title: string;
  description: string;
  url?: string;
};

export function WritingEntry({ title, description, url }: WritingEntryProps) {
  return (
    <article className="border-t border-[var(--border)] py-7 first:border-t-0 first:pt-0">
      <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
          >
            {title}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
        {description}
      </p>
    </article>
  );
}
