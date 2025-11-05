'use client';

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ValuesBentoSection } from "@/components/sections/ValuesBentoSection";
import { HeroCanvas } from "@/components/ui/HeroCanvas";
import { ImageTrail } from "@/components/ui/ImageTrail";
import { motion } from "framer-motion";
import { RefObject, useRef } from "react";

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <>
      {/* 1. Hero-Sektion */}
      <section ref={sectionRef} className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center pt-20 text-center">
        <HeroCanvas />
        <ImageTrail containerRef={sectionRef as RefObject<HTMLElement>} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-page-bg)] to-transparent z-[1]" />
        <motion.div
          className="relative z-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[var(--color-heading)]">
            Digitales Handwerk.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-text)]">
            Wir sind Fabian & Antonio. Entwickler und Kreativer.
            Technik und Storytelling. Code und Content.
          </p>
        </motion.div>
      </section>
      
      {/* 2. Die existierende AboutSection */}
      <AboutSection />

      <ProcessSection />

      {/* 3. Die neue Bento-Grid Sektion */}
      <ValuesBentoSection />

      {/* 4. Der abschließende CTA */}
      <ContactSection />
    </>
  );
}