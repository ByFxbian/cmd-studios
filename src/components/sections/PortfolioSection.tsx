"use client";

import { motion, type Variants } from 'framer-motion';
import { PortfolioCard } from '../ui/PortfolioCard';

type Project = {
  id: number;
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion"; 
  imageUrl: string;
  href: string;
};

const featuredProjects: Project[] = [ // Typ 'Project[]' anwenden
  {
    id: 1,
    title: "Alkos Barber Buchungssystem",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+Projekt", 
    href: "/portfolio/alkos-barber",
  },
  {
    id: 2,
    title: "Imagefilm für 'XYZ Fitness'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+Projekt",
    href: "/portfolio/xyz-fitness",
  },
  {
    id: 3,
    title: "Website Relaunch 'Muster AG'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+Projekt+2",
    href: "/portfolio/muster-ag",
  },
];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function PortfolioSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white border-y border-zinc-200">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Überschrift */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
            Ausgewählte Arbeiten
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
            Ein Einblick in unsere Projekte. Hier trifft Strategie auf 
            Umsetzung – von Code bis Content.
          </p>
        </motion.div>

        {/* Portfolio-Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              href={project.href}
            />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <button className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-dark transition-colors">
            Alle Projekte ansehen
          </button>
        </div>

      </div>
    </section>
  );
}