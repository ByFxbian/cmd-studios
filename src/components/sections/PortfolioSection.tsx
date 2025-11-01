/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, type Variants } from 'framer-motion';
import { PortfolioCard } from '../ui/PortfolioCard';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

/*const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
*/

export function PortfolioSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(gridRef.current?.children || []);

        let proxy = { skew: 0};
        let skewSetter = gsap.quickSetter(cards, "skewY", "deg");
        let clamp = gsap.utils.clamp(-15, 15);

        let ctx = gsap.context(() => {
            cards.forEach((card: any, i) => {
                const yPercent = i === 1 ? 15 : -15;
                gsap.fromTo(card,
                    {
                        yPercent: yPercent * 1.5
                    },
                    {
                        yPercent: yPercent * -1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            scrub: 1,
                            start: "top bottom",
                            end: "bottom top"
                        }
                    }
                );
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    const skew = clamp(velocity / -200);

                    gsap.to(proxy, {
                        skew: skew,
                        duration: 0.5,
                        ease: "power3.out",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew)
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
        </div>

        <div className="text-center mt-16">
          <motion.button 
            className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-dark transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Alle Projekte ansehen
          </motion.button>
        </div>

      </div>
    </section>
  );
}