"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { featuredProjects } from "@/lib/portfolio-data";
import { ImageTrail } from "../ui/ImageTrail";
import { PortfolioCard } from "../ui/PortfolioCard";

const CARD_LAYOUTS = [
  "md:col-span-7",
  "md:col-span-5 md:pt-24",
  "md:col-span-8 md:col-start-3 md:pt-10",
];

export function PortfolioSection() {
  const trailAreaRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-navbar-border)] bg-[var(--color-page-bg)]">
      <div ref={trailAreaRef} className="relative flex min-h-[42vh] items-end overflow-hidden py-16 md:min-h-[50vh] md:py-20">
        <ImageTrail containerRef={trailAreaRef} />
        <div className="site-container relative z-[2] pointer-events-none">
          <motion.h2
            className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] leading-[0.86] text-[var(--color-heading)]"
            initial={reduceMotion ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Ausgewählte Arbeiten
          </motion.h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            Projekte, bei denen Strategie, Gestaltung und technische Umsetzung gemeinsam wirken.
          </p>
        </div>
      </div>

      <div className="site-container pb-[clamp(5rem,9vw,9rem)]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={CARD_LAYOUTS[index]}
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                href={`/portfolio/${project.slug}`}
                imageClassName={index === 1 ? "aspect-[4/5]" : index === 2 ? "aspect-[16/9]" : "aspect-[4/3]"}
                sizes={index === 1 ? "(max-width: 767px) 100vw, 42vw" : "(max-width: 767px) 100vw, 58vw"}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-24">
          <Link
            href="/portfolio"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-heading)] px-8 font-accent text-lg text-[var(--color-page-bg)] transition-transform hover:-translate-y-1 active:scale-[0.98]"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
