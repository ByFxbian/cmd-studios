import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ValuesBentoSection } from "@/components/sections/ValuesBentoSection";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Fabian und Antonio verbinden Development, Design und Content bei CMD Studios. Direkt, präzise und mit einem gemeinsamen Qualitätsanspruch.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Über CMD Studios",
    description: "Zwei Perspektiven, ein gemeinsamer Anspruch an starke digitale Auftritte.",
    url: "/about",
  },
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
