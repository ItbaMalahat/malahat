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
  awards,
  contact,
  currentExplorations,
  leadership,
  outsideWork,
  projects,
  publications,
  researchInterests,
  siteConfig,
  socialLinks,
  teaching,
  timeline,
  writing,
  writingIntro,
} from "@/data/portfolio";

export default function Home() {
  const publicationsByYear = publications.reduce<
    Record<string, typeof publications>
  >((groups, publication) => {
    const key = publication.isThesis
      ? "Undergraduate Thesis"
      : publication.year;
    groups[key] = groups[key] ?? [];
    groups[key].push(publication);
    return groups;
  }, {});

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-6 pb-20 md:px-10">
      <Hero />

      <section
        id="research"
        aria-labelledby="research-heading"
        className="border-t border-[var(--border)] bg-[var(--background-alt)] py-16 sm:py-24 -mx-6 px-6 md:-mx-10 md:px-10"
      >
        <SectionHeading id="research-heading" title="Research Interests" />
        <div className="grid gap-x-12 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <ResearchInterest key={interest.title} {...interest} />
          ))}
        </div>
      </section>

      <section
        id="publications"
        aria-labelledby="publications-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="publications-heading" title="Publications" />
        <div className="max-w-3xl space-y-2">
          {Object.entries(publicationsByYear).map(([group, entries]) => (
            <div key={group}>
              {!entries[0]?.isThesis ? (
                <h3 className="mb-1 pt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] first:pt-0">
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
        className="border-t border-[var(--border)] bg-[var(--pale)] py-16 sm:py-24 -mx-6 px-6 md:-mx-10 md:px-10"
      >
        <SectionHeading
          id="projects-heading"
          title="Selected Projects"
          description="Research systems, production engineering work, and public-interest concepts."
        />
        <div className="max-w-3xl">
          {projects.map((project) => (
            <ProjectEntry key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section
        id="timeline"
        aria-labelledby="timeline-heading"
        className="border-t border-[var(--border)] py-16 sm:py-24"
      >
        <SectionHeading id="timeline-heading" title="Timeline" />
        <div className="max-w-4xl">
          {timeline.map((item) => (
            <TimelineEntry
              key={`${item.role}-${item.organisation}-${item.period}`}
              {...item}
            />
          ))}
        </div>
      </section>

      {awards.length > 0 ? (
        <section
          id="awards"
          aria-labelledby="awards-heading"
          className="border-t border-[var(--border)] bg-[var(--background-alt)] py-16 sm:py-24 -mx-6 px-6 md:-mx-10 md:px-10"
        >
          <SectionHeading id="awards-heading" title="Awards & Distinctions" />
          <div className="max-w-3xl">
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
        <SectionHeading
          id="writing-heading"
          title="Writing"
          description={writingIntro}
        />
        <div className="max-w-3xl">
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
              Read more on Medium <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
      </section>

      <section
        id="beyond"
        aria-labelledby="beyond-heading"
        className="border-t border-[var(--border)] bg-[var(--pale)] py-16 sm:py-24 -mx-6 px-6 md:-mx-10 md:px-10"
      >
        <SectionHeading id="beyond-heading" title="Beyond Research" />
        <div className="max-w-3xl space-y-14">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
              Leadership & Community
            </h3>
            <div className="mt-6 space-y-6">
              {leadership.map((item) => (
                <article key={item.title}>
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
            <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
              Teaching
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              {teaching.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
              Current Explorations
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {currentExplorations.map((item) => (
                <li
                  key={item}
                  className="border border-[var(--border)] bg-white px-3 py-1.5 text-[13px] text-[var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
              Outside Work
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
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
        <div className="max-w-[44rem] space-y-5 text-[16px] leading-8 text-[var(--muted)]">
          <p>{contact.copy}</p>
          <p>{contact.followUp}</p>
        </div>
        <div className="mt-8 max-w-3xl border border-[var(--border)] bg-[var(--pale)] p-6 sm:p-8">
          <p className="text-[15px] text-[var(--foreground)]">
            <span className="font-medium">Location:</span> {siteConfig.location}
          </p>
          {socialLinks.phone ? (
            <p className="mt-3 text-[15px] text-[var(--foreground)]">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href={`tel:${socialLinks.phone.replace(/\s+/g, "")}`}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {socialLinks.phone}
              </a>
            </p>
          ) : null}
          <SocialLinks className="mt-5" />
        </div>
      </section>
    </main>
  );
}
