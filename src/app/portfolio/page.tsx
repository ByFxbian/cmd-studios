import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PortfolioExplorer } from "@/components/sections/PortfolioExplorer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ausgewählte Web-, App- und Content-Projekte von CMD Studios. Von individuellen Next.js-Lösungen bis zu Social-Media-Content.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | CMD Studios",
    description: "Ausgewählte Projekte aus Webentwicklung, Design und Videoproduktion.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioExplorer />
      <ContactSection />
    </>
  );
}
