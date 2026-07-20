type ResearchInterestProps = {
  title: string;
  question: string;
  description: string;
};

export function ResearchInterest({
  title,
  question,
  description,
}: ResearchInterestProps) {
  return (
    <article className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
      <div className="mb-3 flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
        />
        <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
          {title}
        </h3>
      </div>
      <p className="pl-5 text-[15px] leading-7 text-[var(--foreground)] sm:text-base sm:leading-8">
        {question}
      </p>
      <p className="mt-3 pl-5 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
        {description}
      </p>
    </article>
  );
}
