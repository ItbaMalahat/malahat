import type { Metadata } from "next";
import { MentorshipOptionCard } from "@/components/mentorship-option";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { mentorshipOptions, mentorshipPage, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Mentorship & Collaboration | ${siteConfig.name}`,
};

export default function MentorshipPage() {
  const mentorship = mentorshipOptions.filter((option) => option.category === "Mentorship");
  const collaborate = mentorshipOptions.filter((option) => option.category === "Collaborate");
  const [firstIntro, ...restIntro] = mentorshipPage.intro;

  return (
    <div className="page">
      <PageHeader title={mentorshipPage.heading} intro={firstIntro} />
      {restIntro.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}

      <SectionLabel title="Mentorship" />
      {mentorship.map((option) => (
        <MentorshipOptionCard key={option.number} {...option} />
      ))}

      <SectionLabel title="Collaborate" />
      {collaborate.map((option) => (
        <MentorshipOptionCard key={option.number} {...option} />
      ))}

      <div className="callout">
        <p className="content-text">{mentorshipPage.footerNote}</p>
      </div>
    </div>
  );
}
