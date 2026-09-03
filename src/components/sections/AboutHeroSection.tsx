"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const people = [
  { name: "Fabian", image: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/Fabian.jpeg" },
  { name: "Antonio", image: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/ANTONIO.png" },
];

export function AboutHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-page-bg)] pt-24">
      <div className="site-container grid min-h-[calc(100dvh-6rem)] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-balance text-[clamp(3.8rem,9vw,8.6rem)] leading-[0.86] text-[var(--color-heading)]">Digitales Handwerk.</h1>
          <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-[var(--color-text)] md:text-2xl">
            Zwei Perspektiven, ein gemeinsamer Anspruch an starke digitale Auftritte.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-5">
          {people.map((person, index) => (
            <motion.figure
              key={person.name}
              className={index === 1 ? "pt-14" : "pb-14"}
              initial={reduceMotion ? false : { opacity: 0, x: 36, y: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.08 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[3/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
                <Image src={person.image} alt={`Foto von ${person.name}`} fill priority={index === 0} sizes="(max-width: 1023px) 50vw, 20vw" className="object-cover grayscale" />
              </div>
              <figcaption className="mt-3 font-accent text-sm text-[var(--color-text)]">{person.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
