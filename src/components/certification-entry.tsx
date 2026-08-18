import type { Certification } from "@/types/portfolio";

export function CertificationEntry(cert: Certification) {
  return (
    <article className="entry">
      <p className="date-text">{cert.year}</p>
      <h3>{cert.title}</h3>
      <p className="institute-text">
        {cert.issuer} · {cert.issued}
      </p>
      {cert.credentialId ? (
        <p className="date-text">Credential ID: {cert.credentialId}</p>
      ) : null}
    </article>
  );
}
