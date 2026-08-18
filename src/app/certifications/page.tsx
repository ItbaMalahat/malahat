import type { Metadata } from "next";
import { CertificationEntry } from "@/components/certification-entry";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { certifications, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Certifications | ${siteConfig.name}`,
};

export default function CertificationsPage() {
  const groups = Array.from(new Set(certifications.map((cert) => cert.group)));

  return (
    <div className="page">
      <PageHeader title="Certifications" />
      {groups.map((group) => (
        <div key={group}>
          <SectionLabel title={group} />
          <div>
            {certifications
              .filter((cert) => cert.group === group)
              .map((cert) => (
                <CertificationEntry key={cert.title} {...cert} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
