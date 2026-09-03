"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowDownRight, HiCodeBracket, HiVideoCamera } from "react-icons/hi2";
import { featuredProjects } from "@/lib/portfolio-data";

export function ServiceHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-page-bg)] pt-24">
        <div className="site-container grid min-h-[calc(100dvh-6rem)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-balance text-[clamp(3.7rem,9vw,8.7rem)] leading-[0.86] text-[var(--color-heading)]">
              Unsere Leistungen
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-[var(--color-text)] md:text-2xl">
              Web, App und Content. Strategisch geplant, sauber gestaltet und zuverlässig umgesetzt.
            </p>
          </motion.div>

          <motion.div
            className="relative lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, x: 48, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-[0_32px_80px_rgb(28_27_26_/_16%)]">
              <Image
                src={featuredProjects[2].imageUrl}
                alt={featuredProjects[2].title}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[var(--color-navbar-border)] bg-[var(--color-surface)]">
        <div className="site-container grid grid-cols-1 md:grid-cols-2">
          <article id="web" className="scroll-mt-28 border-b border-[var(--color-navbar-border)] py-10 md:border-b-0 md:border-r md:py-14 md:pr-10">
            <HiCodeBracket aria-hidden="true" className="h-8 w-8 text-accent" />
            <div className="mt-12 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl text-[var(--color-heading)] md:text-5xl">Web & App</h2>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-[var(--color-text)]">
                  Websites, digitale Produkte, Headless CMS, Shops, SEO und technische Weiterentwicklung.
                </p>
              </div>
              <HiArrowDownRight aria-hidden="true" className="h-8 w-8 shrink-0 text-[var(--color-text-muted)]" />
            </div>
          </article>

          <article id="video" className="scroll-mt-28 py-10 md:py-14 md:pl-10">
            <HiVideoCamera aria-hidden="true" className="h-8 w-8 text-accent" />
            <div className="mt-12 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl text-[var(--color-heading)] md:text-5xl">Video & Content</h2>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-[var(--color-text)]">
                  Imagefilm, Social-Media-Content, Kampagnen, Schnitt, Color Grading und Motion Design.
                </p>
              </div>
              <HiArrowDownRight aria-hidden="true" className="h-8 w-8 shrink-0 text-[var(--color-text-muted)]" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
