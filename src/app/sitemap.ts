import type { MetadataRoute } from "next";
import { site, projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/experience",
    "/projects",
    "/systems",
    "/skills",
    "/contact",
    "/resume",
  ].map((route) => ({
    url: `${site.canonicalUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.canonicalUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
