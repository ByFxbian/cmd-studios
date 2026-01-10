'use client';

import { RefObject, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { ContactSection } from '@/components/sections/ContactSection';
import { allProjects, type Project } from '@/lib/portfolio-data'
import { HeroCanvas } from '@/components/ui/HeroCanvas';
import { ImageTrail } from '@/components/ui/ImageTrail';

type Category = "Alle" | "Web-Entwicklung" | "Video-Produktion";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  const filteredProjects = activeCategory === "Alle"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  const categories: Category[] = ["Alle", "Web-Entwicklung", "Video-Produktion"];

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
          <h1 className="text-5xl md:text-8xl font-bold tracking-normal mb-6 text-[var(--color-heading)]">
            Unsere Arbeiten
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-[var(--color-text)] tracking-wide">
            Jedes Projekt ist eine Partnerschaft. Hier ist eine Auswahl
            unserer jüngsten Arbeiten im Bereich Web & Video.
          </p>
        </motion.div>
      </section>

      <section className="w-full py-20 md:py-32 bg-zinc-50 border-bottom border-zinc-200">
        <div className="container mx-auto max-w-7xl px-6">

          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-semibold font-accent px-5 py-2 rounded-md transition-colors
                  ${activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PortfolioCard
                    title={project.title}
                    category={project.category}
                    imageUrl={project.imageUrl}
                    href={`/portfolio/${project.slug}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <ContactSection />
    </>
  );
}