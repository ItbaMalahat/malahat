import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PublicationEntry } from "@/components/publication-entry";
import { SectionLabel } from "@/components/section-label";
import { publications, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Publications | ${siteConfig.name}`,
};

export default function PublicationsPage() {
  const published = publications.filter((p) => p.section === "Published");
  const inPreparation = publications.filter((p) => p.section === "In preparation");

  return (
    <div className="page">
      <PageHeader title="Publications" />

      <SectionLabel title="Published articles" />
      <div>
        {published.map((publication) => (
          <PublicationEntry key={publication.title} {...publication} />
        ))}
      </div>

      <SectionLabel title="Manuscripts in preparation" />
      <div>
        {inPreparation.map((publication) => (
          <PublicationEntry key={publication.title} {...publication} />
        ))}
      </div>
    </div>
  );
}
