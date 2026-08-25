import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { Tags } from "@/components/tags";
import {
  aboutIntro,
  bios,
  contactPage,
  currentInterests,
  cvSection,
  siteConfig,
  socialLinks,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About & Contact | ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="page">
      <PageHeader title="About" />

      {siteConfig.profileImage ? (
        <Image
          className="about-portrait"
          src={siteConfig.profileImage}
          alt={siteConfig.profileImageAlt}
          width={280}
          height={280}
        />
      ) : null}

      {aboutIntro.paragraphs.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}

      <div className="card-section cv-callout" id="cv">
        <p className="eyebrow">Curriculum Vitae</p>
        <p className="content-text">{cvSection.description}</p>
        {socialLinks.cv ? (
          <p className="link-row">
            <a className="button-link" href={socialLinks.cv} target="_blank" rel="noopener noreferrer">
              Download CV <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
      </div>

      <SectionLabel title="Current interests" />
      <Tags tags={currentInterests} variant="pill" />

      <SectionLabel title="Bios" />
      <p className="content-text lede">
        Reusable bios for conference programs, press requests, and speaker
        introductions — open the length you need.
      </p>
      <div className="bio-accordion">
        {bios.map((bio, index) => (
          <details key={bio.label} open={index === 0}>
            <summary>{bio.label}</summary>
            <p className="content-text">{bio.body}</p>
          </details>
        ))}
      </div>

      <SectionLabel id="contact" title="Get in touch" />
      <div className="deep-band">
        <h3>{contactPage.heading}</h3>
        {contactPage.paragraphs.map((paragraph, index) => (
          <p className="content-text" key={index}>
            {paragraph}
          </p>
        ))}
        <p className="content-text">
          <strong>{contactPage.collaborationCta}</strong>
        </p>
        <p className="date-text">Location: {socialLinks.location}</p>

        <ul className="tag-pills contact-actions">
          {contactPage.actions.map((action) => (
            <li key={action.label}>
              <a
                className="link"
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="quiet-link">
        <a href="/beyond-research">Itba, beyond research →</a>
      </p>
    </div>
  );
}
