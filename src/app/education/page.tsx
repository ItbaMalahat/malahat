import type { Metadata } from "next";
import { EducationEntry } from "@/components/education-entry";
import { PageHeader } from "@/components/page-header";
import { education, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Education | ${siteConfig.name}`,
};

export default function EducationPage() {
  return (
    <div className="page">
      <PageHeader title="Education" />
      <div>
        {education.map((entry) => (
          <EducationEntry key={entry.institution} {...entry} />
        ))}
      </div>
    </div>
  );
}
