import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/about", "/chrome-ore", "/plant", "/markets", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({
    url: path ? `${site.url}${path}` : site.url,
    lastModified: site.updated,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
