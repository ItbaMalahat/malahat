import type { Metadata } from "next";
import { beyondResearchPage, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${beyondResearchPage.heading} | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function BeyondResearchPage() {
  return (
    <div className="page">
      <h1>{beyondResearchPage.heading}</h1>
      <p className="content-text lede">{beyondResearchPage.intro}</p>

      {beyondResearchPage.story.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}

      <p className="quiet-link">
        <a href="/about">← Back to About</a>
      </p>
    </div>
  );
}
