"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { packages, type PackageCategory } from "@/lib/package-data";
import { PackageCard } from "../ui/PackageCard";
import { MagneticLink } from "../ui/MagneticLink";

export function PackageSection() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("web");
  const reduceMotion = useReducedMotion();
  const filteredPackages = packages.filter((pkg) => pkg.category === activeCategory);

  return (
    <section className="section-space overflow-hidden bg-[var(--color-page-bg)]">
      <div className="site-container">
        <div className="max-w-3xl">
          <h2 className="text-balance text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.95] text-[var(--color-heading)]">Ein klarer Rahmen für Ihr Projekt.</h2>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            Transparente Pakete als Ausgangspunkt. Umfang und Prioritäten stimmen wir gemeinsam auf Ihr Vorhaben ab.
          </p>
        </div>

        <div className="mt-10 inline-flex max-w-full rounded-full bg-[var(--color-surface)] p-1.5" role="group" aria-label="Paketkategorie">
          {([
            { value: "web" as const, label: "Web Pakete" },
            { value: "content" as const, label: "Content Pakete" },
          ]).map((category) => {
            const active = activeCategory === category.value;
            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                aria-pressed={active}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:px-7 sm:text-base ${active ? "text-[var(--color-page-bg)]" : "text-[var(--color-text)] hover:text-[var(--color-heading)]"}`}
              >
                <span className="relative z-10">{category.label}</span>
                {active ? (
                  <motion.span
                    layoutId="package-tab"
                    className="absolute inset-0 rounded-full bg-[var(--color-heading)]"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32 }}
          >
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className={pkg.isPopular ? "lg:col-span-12" : "lg:col-span-6"}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 border-t border-[var(--color-navbar-border)] pt-10 md:mt-24 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <h3 className="text-3xl text-[var(--color-heading)] md:text-4xl">Kein passendes Paket dabei?</h3>
            <p className="mt-3 max-w-[56ch] leading-relaxed text-[var(--color-text)]">
              Für besondere Anforderungen, Musikvideos, Events oder individuelle digitale Produkte entwickeln wir ein passendes Setup.
            </p>
          </div>
          <MagneticLink
            href="/contact"
            className="mt-7 inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 font-accent text-lg text-white transition-colors hover:bg-accent-dark md:mt-0"
          >
            Kontakt
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
