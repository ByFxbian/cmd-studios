import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/portfolio-data";

const BASE_URL = "https://cmd-studios.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    "/impressum",
    "/datenschutz",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route === "/portfolio" || route === "/services" ? 0.9 : 0.7,
    })),
    ...allProjects.map((project) => ({
      url: `${BASE_URL}/portfolio/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
