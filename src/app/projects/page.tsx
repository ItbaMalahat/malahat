import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectEntry } from "@/components/project-entry";
import { projects, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <PageHeader title="Selected Projects" />
      <div>
        {projects.map((project) => (
          <ProjectEntry key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
