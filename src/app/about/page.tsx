import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ValuesBentoSection } from "@/components/sections/ValuesBentoSection";
import { createSocialMetadata } from "@/lib/seo";

const description = "Fabian und Antonio verbinden Development, Design und Content bei CMD Studios. Direkt, präzise und mit einem gemeinsamen Qualitätsanspruch.";

export const metadata: Metadata = {
  title: "Über uns",
  description,
  alternates: { canonical: "/about" },
  ...createSocialMetadata({
    title: "Über CMD Studios",
    description,
    url: "/about",
  }),
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutSection showImages={false} />
      <ValuesBentoSection />
      <ContactSection />
    </>
  );
}
