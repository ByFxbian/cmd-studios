'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { processSteps } from '@/lib/process-data';
import { useLoading } from '@/context/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useLoading();

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const steps = gsap.utils.toArray('.process-step') as HTMLElement[];
    const progressBar = '.process-progress-bar';

    const ctx = gsap.context(() => {
      gsap.to(progressBar, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      steps.forEach((step) => {
        gsap.to(step, {
          toggleClass: 'is-active',
          ease: 'none',
          scrollTrigger: {
            trigger: step,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Überschrift */}
        <motion.div
          className="text-left mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-heading)]">
            Unser Prozess
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text)]">
            Transparent, iterativ und auf Exzellenz ausgelegt. 
            So bringen wir eure Vision zum Leben.
          </p>
        </motion.div>

        {/* Stepper-Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
          {/* Linke Spalte: Die Linie */}
          <div className="absolute top-0 left-4 md:left-8 w-1 h-full bg-zinc-200">
            {/* Die animierte Fortschrittslinie */}
            <div 
              className="process-progress-bar w-full h-full bg-accent"
              style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
            />
          </div>

          {/* Rechte Spalte: Die Schritte */}
          <div className="flex flex-col gap-16 md:gap-28 md:col-start-2">
            {processSteps.map((step) => (
              <div 
                key={step.id} 
                className="process-step relative pl-12 md:pl-24"
              >
                {/* * CSS-Magie für den aktiven Status:
                  * 'is-active' wird von GSAP hinzugefügt.
                  * Wir nutzen Tailwind's group-peer-Mechanismus:
                  * text-zinc-400 -> group-[.is-active]:text-[var(--color-heading)]
                */}
                <div className="group">
                  <span className="absolute -left-1 top-1 flex items-center justify-center 
                                 w-10 h-10 rounded-full bg-zinc-200 text-lg font-bold 
                                 text-zinc-500 transition-all duration-300
                                 group-[.is-active]:bg-accent group-[.is-active]:text-white 
                                 md:w-16 md:h-16 md:text-2xl md:-left-0">
                    {step.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-400 
                               transition-colors duration-300 
                               group-[.is-active]:text-[var(--color-heading)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg text-zinc-400 
                              transition-colors duration-300 
                              group-[.is-active]:text-[var(--color-text)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}