import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { outreachIntro, outreachInvitation, outreachTopics, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Speaking & Outreach | ${siteConfig.name}`,
};

export default function OutreachPage() {
  return (
    <div className="page">
      <PageHeader
        title="Speaking, Outreach & Public Engagement"
        intro={outreachIntro.intro}
      />

      <SectionLabel title="Topics I'm available to speak on" />
      {outreachTopics.map((topic) => (
        <article className="entry" key={topic.title}>
          <h3>{topic.title}</h3>
          <p className="content-text">{topic.body}</p>
        </article>
      ))}

      <div className="callout">
        <p className="content-text">{outreachInvitation.copy}</p>
        <p className="content-text">
          <strong>{outreachInvitation.contactLabel}</strong>{" "}
          <a className="link" href={`mailto:${outreachInvitation.email}`}>
            {outreachInvitation.email}
          </a>
        </p>
      </div>
    </div>
  );
}
