/**
 * Public company details.
 * Leave a string empty until the real value exists.
 * The site will not invent an inbox, phone number, or street address.
 *
 * Before launch, set NEXT_PUBLIC_SITE_URL to the live domain
 * (for example https://www.yourdomain.com).
 */

export const site = {
  name: "Asian Mines and Minerals",
  shortName: "Asian Mines",
  description:
    "Asian Mines and Minerals exports chrome ore from Muslim Bagh, Pakistan. Lumpy, concentrate, fines, and refractory grades for China, Oman, and Europe.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://asianmines.com",
  email: "amm@asianmines.com",
  phoneDisplay: "+92 321 3706287",
  phoneTel: "+923213706287",
  /** Digits only, country code included. */
  whatsapp: "923213706287",
  address:
    "Suite 605, 6th Floor, Opposite Jang Press, I.I. Chundrigar Road, Karachi, Pakistan",
  updated: "2026-11-17",
} as const;

export const siteUrl = site.url;

export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/chrome-ore", label: "Chrome ore" },
  { href: "/plant", label: "Plant" },
  { href: "/markets", label: "Markets" },
] as const;

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/chrome-ore", label: "Chrome ore" },
  { href: "/plant", label: "Plant" },
  { href: "/markets", label: "Markets" },
  { href: "/contact", label: "Contact" },
] as const;

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function whatsappNumber(value: string): string | null {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 8 ? digits : null;
}

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}) {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website" as const,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
    },
  };
}
