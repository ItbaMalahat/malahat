import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import {
  peopleIntro,
  presentAffiliations,
  researchSupervision,
  siteConfig,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: `People | ${siteConfig.name}`,
};

export default function PeoplePage() {
  return (
    <div className="page">
      <PageHeader title="People and Affiliations" intro={peopleIntro.intro} />

      <SectionLabel title="Present affiliations" />
      {presentAffiliations.map((block) => (
        <article className="entry" key={block.title}>
          <h3>{block.title}</h3>
          <p className="content-text">{block.body}</p>
        </article>
      ))}

      <SectionLabel title="Research supervision" />
      {researchSupervision.map((block) => (
        <article className="entry" key={block.title}>
          <h3>{block.title}</h3>
          <p className="content-text">{block.body}</p>
        </article>
      ))}
    </div>
  );
}
