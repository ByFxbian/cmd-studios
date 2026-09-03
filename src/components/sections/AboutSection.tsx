"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const team = [
  {
    name: "Fabian",
    role: "Development & Digital Product",
    image: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/Fabian.jpeg",
  },
  {
    name: "Antonio",
    role: "Creative Direction & Content",
    image: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/ANTONIO.png",
  },
];

export function AboutSection({ showImages = true }: { showImages?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space bg-[var(--color-page-bg)]">
      <div className={`site-container grid grid-cols-1 gap-12 ${showImages ? "lg:grid-cols-12 lg:gap-10" : "lg:grid-cols-12"}`}>
        <motion.div
          className={showImages ? "lg:col-span-5 lg:pt-10" : "lg:col-span-8 lg:col-start-3"}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-accent text-base text-accent">Das Team</p>
          <h2 className="mt-4 text-balance text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.94] text-[var(--color-heading)]">
            Ein Entwickler. Ein Kreativer.
          </h2>
          <div className="mt-7 max-w-[60ch] space-y-4 text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            <p>
              Wir sind Fabian und Antonio. Was mit einer gemeinsamen Leidenschaft für digitale Medien begonnen hat, ist heute CMD Studios: Webentwicklung und Videoproduktion aus einer Hand.
            </p>
            <p>
              Fabian bringt vor allem die technische Seite ein, Antonio den kreativen Blick auf Bild, Story und Schnitt. Jedes Projekt entwickeln wir gemeinsam weiter.
            </p>
          </div>
          {showImages ? (
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-accent/40 pb-1 font-medium text-accent transition-colors hover:border-accent"
            >
              Mehr über uns erfahren <HiArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          ) : null}
        </motion.div>

        {showImages ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
            {team.map((person, index) => (
              <motion.figure
                key={person.name}
                className={index === 1 ? "pt-12 sm:pt-20" : ""}
                initial={reduceMotion ? false : { opacity: 0, y: index === 0 ? 26 : 54 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: reduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
                  <Image
                    src={person.image}
                    alt={`Foto von ${person.name}`}
                    fill
                    sizes="(max-width: 767px) 50vw, 30vw"
                    className="object-cover grayscale transition-[filter,transform] duration-700 hover:scale-[1.025] hover:grayscale-0"
                  />
                </div>
                <figcaption className="pt-4">
                  <p className="font-heading text-xl text-[var(--color-heading)] md:text-2xl">{person.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{person.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
