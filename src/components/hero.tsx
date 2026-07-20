import { SocialLinks } from "@/components/social-links";
import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="scroll-mt-28 border-b border-[var(--border)] pb-16 pt-10 sm:pb-20 sm:pt-14"
    >
      <h1
        id="hero-name"
        className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-[var(--foreground)]"
      >
        {hero.name}
      </h1>
      <p className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(1.4rem,3vw,2.15rem)] italic leading-snug text-[var(--muted)]">
        {hero.descriptor}
      </p>
      <div className="mt-8 max-w-[46rem] space-y-5 text-[16px] leading-8 text-[var(--muted)] sm:text-[17px] sm:leading-8">
        {hero.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <SocialLinks className="mt-8" />
    </section>
  );
}
