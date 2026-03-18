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
          <h1 className="text-6xl md:text-8xl tracking-normal mb-6 text-[var(--color-heading)]">
            Digitales Handwerk.
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-[var(--color-text)] tracking-wide">
            Hinter CMD Studios stehen Fabian und Antonio - mit unterschiedlichen Perspektiven, aber einem gemeinsamen Blick für starke digitale Auftritte.
          </p>
        </motion.div>
      </section>

      <AboutSection />

      <ValuesBentoSection />

      <ContactSection />
    </>
  );
}