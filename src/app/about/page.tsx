import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { Tags } from "@/components/tags";
import {
  aboutIntro,
  beyondWork,
  bios,
  currentInterests,
  cvSection,
  researchPhilosophy,
  siteConfig,
  socialLinks,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
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

      <SectionLabel title="Research philosophy" />
      <p className="content-text">{researchPhilosophy}</p>

      <SectionLabel title="Beyond work" />
      <div className="card-section">
        <p className="content-text">{beyondWork}</p>
      </div>

      <SectionLabel title="Current interests" />
      <Tags tags={currentInterests} variant="pill" />

      <SectionLabel id="cv" title="CV" />
      <p className="content-text">{cvSection.description}</p>
      {socialLinks.cv ? (
        <p className="link-row">
          <a
            className="link"
            href={socialLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <span aria-hidden="true">↗</span>
          </a>
        </p>
      ) : (
        <p className="date-text">CV link coming soon.</p>
      )}

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
    </div>
  );
}
