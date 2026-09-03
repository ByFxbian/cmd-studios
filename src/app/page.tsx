import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { TechStack } from "@/components/sections/TechStack";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "CMD Studios | Webdesign, Development & Content",
  description: "Individuelle Websites, Apps und Content für Unternehmen, die digital nicht austauschbar wirken wollen.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServiceSection />

      <PortfolioSection />

      <TechStack />

      <TestimonialsSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
import type { Metadata } from "next";
