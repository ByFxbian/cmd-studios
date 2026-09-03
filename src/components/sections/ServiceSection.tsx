"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { featuredProjects } from "@/lib/portfolio-data";

export function ServiceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space bg-[var(--color-page-bg)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="text-balance text-[clamp(2.7rem,6vw,5.6rem)] leading-[0.95] text-[var(--color-heading)]">
            Digitaler Auftritt und Content, zusammen gedacht.
          </h2>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            Strategie, Gestaltung und Umsetzung greifen ineinander. So entsteht nicht nur eine schöne Oberfläche, sondern ein Auftritt, der funktioniert.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <motion.article
            className="group overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[16/10] min-h-72 overflow-hidden">
              <Image
                src={featuredProjects[0].imageUrl}
                alt={featuredProjects[0].title}
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h3 className="text-3xl text-[var(--color-heading)] md:text-4xl">Webdesign & Development</h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-[var(--color-text)]">
                  Von Websites und Shops bis zu individuellen Web-Apps. Schnell, wartbar und auf echte Nutzung ausgelegt.
                </p>
              </div>
              <Link
                href="/services#web"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-heading)] text-[var(--color-page-bg)] transition-transform hover:-translate-y-1 active:scale-[0.98]"
                aria-label="Mehr über Webdesign und Development"
              >
                <HiArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </motion.article>

          <motion.article
            className="relative flex min-h-[34rem] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-accent p-7 text-white sm:p-10 lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/25" />
            <div aria-hidden="true" className="absolute -right-8 top-8 h-40 w-40 rounded-full border border-white/20" />
            <p className="relative max-w-[20ch] font-accent text-lg text-white/85">Marken werden gesehen. Gute Inhalte bleiben hängen.</p>
            <div className="relative">
              <h3 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] text-white">Video & Content</h3>
              <p className="mt-5 max-w-[42ch] leading-relaxed text-white/85">
                Imagefilm, Social Content und visuelle Kampagnen mit einem klaren Gefühl für Marke, Plattform und Zielgruppe.
              </p>
              <Link
                href="/services#video"
                className="mt-8 inline-flex items-center gap-2 border-b border-white/45 pb-1 font-medium text-white transition-colors hover:border-white"
              >
                Leistungen <HiArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
