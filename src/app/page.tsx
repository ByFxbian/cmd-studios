import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { TechStack } from "@/components/sections/TechStack";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

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
