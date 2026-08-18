import Link from "next/link";
import { ButtonRow } from "@/components/button-row";
import { NewsEntry } from "@/components/news-entry";
import { SectionLabel } from "@/components/section-label";
import { SelectedWorkCard } from "@/components/selected-work-card";
import { Tags } from "@/components/tags";
import {
  homeIntro,
  homeNewsPreviewCount,
  homeResearchInterests,
  news,
  selectedWork,
  siteConfig,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="page">
      <div className="hero-wash">
        <p className="eyebrow">{siteConfig.roleSubtitle}</p>
        <h2 className="hero-greeting">{homeIntro.greeting}</h2>
        <p className="tagline-primary">{siteConfig.primaryTagline}</p>
        <p className="tagline-secondary">{siteConfig.secondaryTagline}</p>
        {homeIntro.paragraphs.map((segments, index) => (
          <p className="content-text" key={index}>
            {segments.map((segment, segmentIndex) =>
              typeof segment === "string" ? (
                segment
              ) : (
                <a
                  key={segmentIndex}
                  className="link"
                  href={segment.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {segment.text}
                </a>
              ),
            )}
          </p>
        ))}

        <ButtonRow buttons={homeIntro.buttons} />

        <SectionLabel title="Research Interests" />
        <Tags tags={homeResearchInterests} variant="pill" />
      </div>

      <SectionLabel title="Selected Work" />
      <div className="grid-2">
        {selectedWork.map((item) => (
          <SelectedWorkCard key={item.title} {...item} />
        ))}
      </div>

      <SectionLabel title="Latest News" />
      <div>
        {news.slice(0, homeNewsPreviewCount).map((item, index) => (
          <NewsEntry key={index} {...item} />
        ))}
      </div>
      <p>
        <Link className="link" href="/news">
          See all news <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </div>
  );
}
