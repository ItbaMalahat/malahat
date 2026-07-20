type ResearchInterestProps = {
  title: string;
  description: string;
};

export function ResearchInterest({ title, description }: ResearchInterestProps) {
  return (
    <article className="border-t border-[var(--border)] py-7 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="mt-1 text-[var(--accent)]">
          ◈
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[var(--heading)] sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
