type ResearchInterestProps = {
  title: string;
  description: string;
};

export function ResearchInterest({ title, description }: ResearchInterestProps) {
  return (
    <article className="bg-white p-6">
      <span aria-hidden="true" className="mb-2 block text-[1.1rem] text-[var(--accent)]">
        ◈
      </span>
      <h3 className="font-[family-name:var(--font-display)] text-[0.95rem] font-medium leading-snug text-[var(--heading)]">
        {title}
      </h3>
      <p className="mt-2 text-[0.83rem] leading-[1.6] text-[var(--muted)]">
        {description}
      </p>
    </article>
  );
}
