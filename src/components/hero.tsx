import { SocialLinks } from "@/components/social-links";
import { hero, researchAffiliation } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-name"
      className="scroll-mt-28 border-b border-[var(--border)] pb-16 pt-10 sm:pb-20 sm:pt-14"
    >
      <p className="inline-block bg-[var(--light)] px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--accent)]">
        {hero.eyebrow}
      </p>
      <h1
        id="hero-name"
        className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-[2.6rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--heading)]"
      >
        {hero.name}
      </h1>
      <p className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-base italic font-light leading-snug text-[var(--muted)]">
        {hero.descriptor}
      </p>
      <div className="mt-8 max-w-[44rem] space-y-5 text-[16px] leading-8 text-[var(--muted)] sm:text-[17px]">
        {hero.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 max-w-[44rem] text-[15px] leading-7 text-[var(--foreground)] sm:text-base">
        {researchAffiliation}
      </p>
      <SocialLinks className="mt-8" />
    </section>
  );
}
