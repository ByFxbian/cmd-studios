import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";

export const metadata: Metadata = {
  title: "Leistungen für Web, App und Content",
  description: "Webdesign, App Design, Next.js Development, SEO, Videoproduktion und Social-Media-Content von CMD Studios.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Leistungen für Web, App und Content | CMD Studios",
    description: "Strategie, Gestaltung, Development und Content für digitale Auftritte mit Charakter.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      <PackageSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
