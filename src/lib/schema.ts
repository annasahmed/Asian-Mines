import { faqs } from "@/lib/content";
import { site, siteUrl } from "@/lib/site";

export function organizationLd(logoPath: string | null) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: siteUrl,
        description: site.description,
        logo: logoPath ? `${siteUrl}${logoPath}` : undefined,
        email: site.email || undefined,
        telephone: site.phoneDisplay || undefined,
        areaServed: [
          { "@type": "Country", name: "China" },
          { "@type": "Country", name: "Oman" },
          { "@type": "Place", name: "Europe" },
        ],
        knowsAbout: ["Chrome ore", "Chromite", "Mineral export"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
          addressLocality: "Karachi",
          streetAddress: site.address || undefined,
        },
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: siteUrl,
        description: site.description,
        inLanguage: "en",
        publisher: { "@type": "Organization", name: site.name },
      },
    ],
  };
}

export function breadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteUrl}${path}`,
      },
    ],
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Chrome ore",
    category: "Chromite",
    material: "Chromite",
    description:
      "Chrome ore (chromite) from Muslim Bagh, prepared by Asian Mines and Minerals for export to China, Oman, and Europe. Chemistry and size are agreed per shipment.",
    countryOfOrigin: { "@type": "Country", name: "Pakistan" },
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name, url: siteUrl },
  };
}
