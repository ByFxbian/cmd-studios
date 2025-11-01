'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { ContactSection } from '@/components/sections/ContactSection';

type Project = {
  id: number;
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion"; 
  imageUrl: string;
  href: string;
};

const allProjects : Project[] = [
  {
    id: 1,
    title: "Alkos Barber Buchungssystem",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+1", 
    href: "/portfolio/alkos-barber",
  },
  {
    id: 2,
    title: "Imagefilm für 'XYZ Fitness'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+1",
    href: "/portfolio/xyz-fitness",
  },
  {
    id: 3,
    title: "Website Relaunch 'Muster AG'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+2",
    href: "/portfolio/muster-ag",
  },
  {
    id: 4,
    title: "Event-Aftermovie 'Summer Vibes'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+2",
    href: "/portfolio/summer-vibes",
  },
  {
    id: 5,
    title: "Corporate Portraits 'Tech Inc.'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+3",
    href: "/portfolio/tech-inc",
  },
  {
    id: 6,
    title: "Headless CMS für 'Blogify'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+3",
    href: "/portfolio/blogify",
  },
];

type Category = "Alle" | "Web-Entwicklung" | "Video-Produktion";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  const filteredProjects = activeCategory === "Alle"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  const categories: Category[] = ["Alle", "Web-Entwicklung", "Video-Produktion"];

  return (
    <>
      {/* 1. Hero-Sektion */}
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center pt-20 text-center">
        <motion.div
          className="relative z-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[var(--color-heading)]">
            Unsere Arbeiten
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-text)]">
            Jedes Projekt ist eine Partnerschaft. Hier ist eine Auswahl
            unserer jüngsten Arbeiten im Bereich Web & Video.
          </p>
        </motion.div>
      </section>

      {/* 2. Filter & Galerie */}
      <section className="w-full py-20 md:py-32 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Filter-Buttons */}
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
                className={`font-semibold px-5 py-2 rounded-md transition-colors
                  ${activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Animierte Galerie */}
          <motion.div
            layout
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
                    href={project.href}
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