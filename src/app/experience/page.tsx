import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/experience-entry";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { experience, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Experience | ${siteConfig.name}`,
};

export default function ExperiencePage() {
  const research = experience.filter((entry) => entry.group === "Research");
  const professional = experience.filter((entry) => entry.group === "Professional");

  return (
    <div className="page">
      <PageHeader title="Experience" />

      <SectionLabel title="Research experience" />
      <div>
        {research.map((entry) => (
          <ExperienceEntry
            key={`${entry.role}-${entry.organisation}`}
            {...entry}
          />
        ))}
      </div>

      <SectionLabel title="Professional experience" />
      <div>
        {professional.map((entry) => (
          <ExperienceEntry
            key={`${entry.role}-${entry.organisation}`}
            {...entry}
          />
        ))}
      </div>
    </div>
  );
}
