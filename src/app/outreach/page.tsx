import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import {
  outreachIntro,
  outreachInvitation,
  outreachTopics,
  siteConfig,
  talks,
} from "@/data/portfolio";

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

      {talks.length > 0 ? (
        <>
          <SectionLabel title="Talks" />
          {talks.map((talk) => (
            <article className="entry" key={talk.title + talk.date}>
              <p className="date-text">{talk.date}</p>
              <h3>{talk.title}</h3>
              <p className="institute-text">
                {talk.event}
                {talk.location ? ` · ${talk.location}` : ""}
              </p>
              {talk.url ? (
                <p className="link-row">
                  <a className="link" href={talk.url} target="_blank" rel="noopener noreferrer">
                    Event details <span aria-hidden="true">↗</span>
                  </a>
                </p>
              ) : null}
            </article>
          ))}
        </>
      ) : null}

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
