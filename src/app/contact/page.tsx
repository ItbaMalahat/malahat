import type { Metadata } from "next";
import { contactPage, siteConfig, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <div className="page">
      <h1>{contactPage.heading}</h1>
      {contactPage.paragraphs.map((paragraph, index) => (
        <p className="content-text" key={index}>
          {paragraph}
        </p>
      ))}

      <div className="deep-band">
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
    </div>
  );
}
