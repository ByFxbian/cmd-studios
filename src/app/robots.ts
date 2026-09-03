import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://cmd-studios.vercel.app/sitemap.xml",
    host: "https://cmd-studios.vercel.app",
  };
}
