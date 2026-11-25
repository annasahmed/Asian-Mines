import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { findLogo } from "@/lib/files";
import { organizationLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Asian Mines and Minerals | Chrome Ore Exporter from Pakistan",
    template: "%s | Asian Mines and Minerals",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "chrome ore",
    "chromite",
    "chrome ore exporter Pakistan",
    "chrome ore supplier China",
    "chrome ore Oman",
    "chrome ore Europe",
    "Muslim Bagh chrome ore",
    "Pakistani chromite",
    "Asian Mines and Minerals",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  category: "mining",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Asian Mines and Minerals | Chrome Ore Exporter from Pakistan",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Mines and Minerals | Chrome Ore Exporter from Pakistan",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2e5a72",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const logoSrc = findLogo();

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader logoSrc={logoSrc} />
        <main id="content">{children}</main>
        <SiteFooter logoSrc={logoSrc} />
        <JsonLd data={organizationLd(logoSrc)} />
      </body>
    </html>
  );
}
