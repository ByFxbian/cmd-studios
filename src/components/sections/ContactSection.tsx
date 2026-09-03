"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { MagneticLink } from "../ui/MagneticLink";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space border-y border-[var(--color-navbar-border)] bg-[var(--color-surface)]">
      <motion.div
        className="site-container"
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h2 className="text-balance text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.9] text-[var(--color-heading)]">
              Bereit für einen Auftritt mit Charakter?
            </h2>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-[var(--color-text)] md:text-xl">
              Website, App, Content oder alles zusammen. Erzählen Sie uns, was Sie vorhaben.
            </p>
          </div>
          <div className="lg:col-span-3 lg:flex lg:justify-end">
            <MagneticLink
              href="/contact"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-accent px-8 font-accent text-xl text-white transition-colors hover:bg-accent-dark active:scale-[0.98]"
            >
              Kontakt <HiArrowRight aria-hidden="true" className="h-5 w-5" />
            </MagneticLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
