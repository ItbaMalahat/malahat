import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ResearchProjectEntry } from "@/components/research-project-entry";
import { SectionLabel } from "@/components/section-label";
import { researchIntro, researchProjects, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Research | ${siteConfig.name}`,
};

export default function ResearchPage() {
  const ongoing = researchProjects.filter((project) => project.status === "Ongoing");
  const completed = researchProjects.filter(
    (project) => project.status === "Completed",
  );

  return (
    <div className="page">
      <PageHeader title="Research" intro={researchIntro.intro} />

      <SectionLabel title="Ongoing" />
      <div>
        {ongoing.map((project) => (
          <ResearchProjectEntry key={project.title} {...project} />
        ))}
      </div>

      <SectionLabel title="Completed" />
      <div>
        {completed.map((project) => (
          <ResearchProjectEntry key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
