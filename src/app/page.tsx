import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServiceSection } from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServiceSection />

      <PortfolioSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
