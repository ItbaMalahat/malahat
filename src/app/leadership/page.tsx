import type { Metadata } from "next";
import { CommunityEntry } from "@/components/community-entry";
import { LeadershipEntry } from "@/components/leadership-entry";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { communityService, leadershipRoles, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Leadership | ${siteConfig.name}`,
};

export default function LeadershipPage() {
  return (
    <div className="page">
      <PageHeader title="Leadership" />

      <SectionLabel title="Community service" />
      <div>
        {communityService.map((entry) => (
          <CommunityEntry
            key={(entry.title ?? entry.organisation ?? "") + (entry.period ?? "")}
            {...entry}
          />
        ))}
      </div>

      <SectionLabel title="Societies" />
      <div>
        {leadershipRoles.map((role) => (
          <LeadershipEntry key={role.organisation} {...role} />
        ))}
      </div>
    </div>
  );
}
