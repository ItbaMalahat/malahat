import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteRail } from "@/components/site-rail";
import { siteConfig, socialLinks } from "@/data/portfolio";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
  },
};

const sameAs = [socialLinks.linkedin, socialLinks.github, socialLinks.medium].filter(
  Boolean,
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: socialLinks.email || undefined,
  jobTitle: "Trustworthy AI Researcher & Machine Learning Engineer",
  sameAs,
  knowsAbout: [
    "Trustworthy AI",
    "AI Safety",
    "Deepfake Detection",
    "Multimodal Learning",
    "Computer Vision",
    "AI Governance",
    "Agentic AI",
    "Data Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="container">
          <SiteRail />
          <main id="main">
            {children}
            <SiteFooter />
          </main>
        </div>
      </body>
    </html>
  );
}
