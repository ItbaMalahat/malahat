import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, socialLinks } from "@/data/portfolio";
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

const sameAs = [
  socialLinks.linkedin,
  socialLinks.github,
  socialLinks.medium,
  socialLinks.googleScholar,
].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: socialLinks.email || undefined,
  telephone: socialLinks.phone ? socialLinks.phone.replace(/\s+/g, "-") : undefined,
  jobTitle: "AI Researcher and Engineer",
  sameAs,
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
      <body className="min-h-full bg-white font-[family-name:var(--font-geist-sans)] text-[var(--foreground)]">
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
