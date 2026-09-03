import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PortfolioExplorer } from "@/components/sections/PortfolioExplorer";
import { createSocialMetadata } from "@/lib/seo";

const description = "Ausgewählte Web-, App- und Content-Projekte von CMD Studios. Von individuellen Next.js-Lösungen bis zu Social-Media-Content.";

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio" },
  ...createSocialMetadata({
    title: "Portfolio | CMD Studios",
    description,
    url: "/portfolio",
  }),
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioExplorer />
      <ContactSection />
    </>
  );
}
