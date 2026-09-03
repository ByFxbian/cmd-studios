"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { allProjects } from "@/lib/portfolio-data";
import { PortfolioCard } from "../ui/PortfolioCard";

type Category = "Alle" | "Web-Entwicklung" | "Video-Produktion";

const categories: Category[] = ["Alle", "Web-Entwicklung", "Video-Produktion"];
const layouts = ["md:col-span-7", "md:col-span-5 md:pt-24", "md:col-span-8 md:col-start-3"];

export function PortfolioExplorer() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");
  const reduceMotion = useReducedMotion();
  const filteredProjects = activeCategory === "Alle" ? allProjects : allProjects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-page-bg)] pt-24">
        <div className="site-container grid min-h-[calc(100dvh-6rem)] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-balance text-[clamp(3.6rem,8.5vw,8.2rem)] leading-[0.86] text-[var(--color-heading)]">Ausgewählte Projekte</h1>
            <p className="mt-7 max-w-[50ch] text-lg leading-relaxed text-[var(--color-text)] md:text-2xl">
              Webentwicklung und Videoproduktion, entstanden in enger Zusammenarbeit mit unseren Kunden.
            </p>
          </motion.div>

          <div className="relative min-h-[24rem] lg:col-span-5 lg:min-h-[34rem]">
            {[allProjects[0], allProjects[2]].map((project, index) => (
              <motion.div
                key={project.id}
                className={`absolute w-[68%] ${index === 0 ? "left-0 top-0 -rotate-3" : "bottom-0 right-0 rotate-3"}`}
                initial={reduceMotion ? false : { opacity: 0, x: 36, y: index === 0 ? -24 : 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.85, delay: reduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-[0_24px_60px_rgb(28_27_26_/_16%)]">
                  <Image src={project.imageUrl} alt={project.title} fill priority={index === 0} sizes="(max-width: 1023px) 68vw, 28vw" className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-[var(--color-navbar-border)] bg-[var(--color-page-bg)]">
        <div className="site-container">
          <div className="flex max-w-full gap-2 overflow-x-auto pb-3" role="group" aria-label="Projekte filtern">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`shrink-0 rounded-full border px-5 py-2.5 font-accent text-sm transition-colors sm:text-base ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-[var(--color-navbar-border)] text-[var(--color-text)] hover:border-[var(--color-text-muted)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-12 md:gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  className={layouts[index % layouts.length]}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 22 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PortfolioCard
                    title={project.title}
                    category={project.category}
                    imageUrl={project.imageUrl}
                    href={`/portfolio/${project.slug}`}
                    imageClassName={index === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}
                    sizes="(max-width: 767px) 100vw, 58vw"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
