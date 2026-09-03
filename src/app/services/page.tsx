import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { createSocialMetadata } from "@/lib/seo";

const description = "Webdesign, App Design, Next.js Development, SEO, Videoproduktion und Social-Media-Content von CMD Studios.";

export const metadata: Metadata = {
  title: "Leistungen für Web, App und Content",
  description,
  alternates: { canonical: "/services" },
  ...createSocialMetadata({
    title: "Leistungen für Web, App und Content | CMD Studios",
    description,
    url: "/services",
  }),
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
