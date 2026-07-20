type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-[17px] sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
