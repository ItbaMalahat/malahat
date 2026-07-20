import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: "itbamalahat@gmail.com",
  telephone: "+92-342-0266614",
  jobTitle: "AI Researcher and Engineer",
  sameAs: [
    "https://www.linkedin.com/in/itba-malahat",
    "https://github.com/ItbaMalahat",
    "https://itbamalahat.medium.com/",
  ],
  knowsAbout: [
    "Trustworthy AI",
    "AI Safety",
    "Deepfake Detection",
    "Multimodal Learning",
    "Computer Vision",
    "AI Systems",
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
      className={`${geistSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body
        className="min-h-full bg-[var(--background)] font-[family-name:var(--font-geist-sans)] text-[var(--foreground)]"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
