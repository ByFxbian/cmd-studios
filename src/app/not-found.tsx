"use client";

import { motion, useReducedMotion } from "framer-motion";

import { MagneticLink } from "@/components/ui/MagneticLink";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="surface-grid relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-page-bg)] px-5 py-28 text-[var(--color-heading)] sm:px-8">
      <div className="site-container relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
        <motion.p
          aria-label="Fehler 404"
          className="select-none font-heading text-[clamp(8rem,25vw,24rem)] font-bold leading-[0.62] tracking-[-0.09em] text-[var(--color-primary)]"
          initial={reduceMotion ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          404
        </motion.p>

        <motion.div
          className="max-w-lg border-t border-[var(--color-border)] pt-6 lg:pb-3"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.15 }}
        >
          <p className="text-xl leading-relaxed text-[var(--color-text-muted)] sm:text-2xl">
            Ups. Du bist im digitalen Nirvana gelandet. Diese Seite existiert
            nicht (mehr).
          </p>
          <MagneticLink
            href="/"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--color-heading)] px-7 py-3 font-semibold text-[var(--color-page-bg)] transition-colors hover:bg-[var(--color-primary)] focus-visible:bg-[var(--color-primary)]"
          >
            Zurück zur Homebase
          </MagneticLink>
        </motion.div>
      </div>
    </main>
  );
}
