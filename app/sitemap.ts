import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vidyaacademy.example";
  const routes = ["", "/about", "/courses", "/faculty-results", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date("2026-10-05"),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
