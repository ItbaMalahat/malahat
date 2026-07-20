import { AwardEntry } from "@/components/award-entry";
import { Hero } from "@/components/hero";
import { ProjectEntry } from "@/components/project-entry";
import { PublicationEntry } from "@/components/publication-entry";
import { ResearchInterest } from "@/components/research-interest";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TimelineEntry } from "@/components/timeline-entry";
import { WritingEntry } from "@/components/writing-entry";
import {
  about,
  awards,
  contact,
  currentExplorations,
  currentResearch,
  education,
  experience,
  leadership,
  outsideWork,
  projects,
  publications,
  researchInterests,
  siteConfig,
  socialLinks,
  teaching,
  writing,
  writingIntro,
} from "@/data/portfolio";

export default function Home() {
  const publicationsByYear = publications.reduce<Record<string, typeof publications>>(
    (groups, publication) => {
      const key = publication.isThesis
        ? "Undergraduate Thesis"
        : publication.year;
      groups[key] = groups[key] ?? [];
      groups[key].push(publication);
      return groups;
    },
    {},
  );

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
      <Hero />

      <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-24">
        <SectionHeading id="about-heading" title="About" />
        <div className="max-w-[46rem] space-y-5 text-[16px] leading-8 text-[var(--muted)] sm:text-[17px]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        id="research"
        aria-labelledby="research-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading
          id="research-heading"
          title="Research Interests"
          description="Areas where my research and engineering practice meet questions of culture, reliability, and real-world deployment."
        />
        <div className="grid gap-x-12 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <ResearchInterest key={interest.title} {...interest} />
          ))}
        </div>

        <div className="mt-16 border border-[var(--border)] bg-[var(--accent-soft)] p-6 sm:p-8">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
            Current Research
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            {currentResearch.title}
          </h3>
          <p className="mt-3 text-[14px] text-[var(--muted)]">
            {currentResearch.role} · {currentResearch.location}
            <span className="mx-2 text-[var(--border)]">|</span>
            {currentResearch.period}
          </p>
          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[var(--muted)]">
            {currentResearch.description}
          </p>
          <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-4 text-[16px] leading-8 text-[var(--foreground)]">
            {currentResearch.researchQuestion}
          </blockquote>
        </div>
      </section>

      <section
        id="publications"
        aria-labelledby="publications-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="publications-heading" title="Publications" />
        <div className="space-y-10">
          {Object.entries(publicationsByYear).map(([group, entries]) => (
            <div key={group}>
              {!entries[0]?.isThesis ? (
                <h3 className="mb-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                  {group}
                </h3>
              ) : null}
              {entries.map((publication) => (
                <PublicationEntry key={publication.title} {...publication} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading
          id="projects-heading"
          title="Projects"
          description="Selected research systems, public-interest concepts, and production engineering work."
        />
        <div>
          {projects.map((project) => (
            <ProjectEntry key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="experience-heading" title="Experience" />
        <div>
          {experience.map((item) => (
            <TimelineEntry
              key={`${item.role}-${item.organisation}-${item.period}`}
              {...item}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-14">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Education
          </h3>
          <article className="mt-6 max-w-3xl">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
              {education.dates}
            </p>
            <h4 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
              {education.degree}
            </h4>
            <p className="mt-1 text-[16px] text-[var(--muted)]">
              {education.institution}
            </p>
            {education.thesis ? (
              <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">
                <span className="font-medium text-[var(--foreground)]">
                  Thesis:
                </span>{" "}
                {education.thesis}
              </p>
            ) : null}
            {education.description ? (
              <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
                {education.description}
              </p>
            ) : null}
          </article>
        </div>
      </section>

      {awards.length > 0 ? (
        <section
          id="awards"
          aria-labelledby="awards-heading"
          className="border-t border-[var(--border)] py-16 sm:py-24"
        >
          <SectionHeading id="awards-heading" title="Awards" />
          <div>
            {awards.map((award) => (
              <AwardEntry key={award.title} {...award} />
            ))}
          </div>
        </section>
      ) : null}

      <section
        id="writing"
        aria-labelledby="writing-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="writing-heading" title="Writing" />
        <div className="mb-10 max-w-[46rem] space-y-4 text-[16px] leading-8 text-[var(--muted)]">
          {writingIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          {writing.map((entry) => (
            <WritingEntry key={entry.title} {...entry} />
          ))}
        </div>
        {socialLinks.medium ? (
          <p className="mt-8">
            <a
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Read more on Medium
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
      </section>

      <section
        id="beyond"
        aria-labelledby="beyond-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="beyond-heading" title="Beyond Research" />

        <div className="space-y-14">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Leadership and Community
            </h3>
            <div className="mt-6 space-y-6">
              {leadership.map((item) => (
                <article key={item.title} className="max-w-3xl">
                  <h4 className="text-[16px] font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Teaching
            </h3>
            <div className="mt-4 max-w-[46rem] space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              {teaching.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Current Explorations
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {currentExplorations.map((item) => (
                <li
                  key={item}
                  className="border border-[var(--border)] bg-white/60 px-3 py-1.5 text-[13px] text-[var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Outside Work
            </h3>
            <div className="mt-4 max-w-[46rem] space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              {outsideWork.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="contact-heading" title={contact.heading} />
        <div className="max-w-[46rem] space-y-5 text-[16px] leading-8 text-[var(--muted)]">
          <p>{contact.copy}</p>
          <p>{contact.followUp}</p>
        </div>
        <div className="mt-8 border border-[var(--border)] bg-[var(--accent-soft)] p-6 sm:p-8">
          <p className="text-[15px] text-[var(--foreground)]">
            <span className="font-medium">Location:</span> {siteConfig.location}
          </p>
          <SocialLinks className="mt-5" />
        </div>
      </section>
    </main>
  );
}
