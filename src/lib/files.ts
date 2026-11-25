import fs from "node:fs";
import path from "node:path";

const imageExtensions = ["jpg", "jpeg", "png", "webp", "avif"] as const;

function publicFile(urlPath: string): string | null {
  if (!urlPath.startsWith("/") || urlPath.includes("..")) return null;

  const relative = urlPath.slice(1).replace(/\//g, path.sep);
  const absolute = path.join(process.cwd(), "public", relative);

  if (!fs.existsSync(absolute)) return null;
  return urlPath;
}

export function resolveImage(base: string): string | null {
  for (const extension of imageExtensions) {
    const found = publicFile(`${base}.${extension}`);
    if (found) return found;
  }
  return null;
}

export function resolveVideo(
  base: string,
): { src: string; type: string } | null {
  const mp4 = publicFile(`${base}.mp4`);
  if (mp4) return { src: mp4, type: "video/mp4" };

  const webm = publicFile(`${base}.webm`);
  if (webm) return { src: webm, type: "video/webm" };

  return null;
}

export function resolveCaptions(base: string): string | null {
  return publicFile(`${base}.vtt`);
}

export function findLogo(): string | null {
  const candidates = [
    "/brand/logo.svg",
    "/brand/logo.png",
    "/brand/logo.webp",
    "/brand/logo.jpg",
    "/brand/logo.jpeg",
  ];

  for (const candidate of candidates) {
    const found = publicFile(candidate);
    if (found) return found;
  }

  return null;
}
