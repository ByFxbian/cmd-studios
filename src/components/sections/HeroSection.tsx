"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects } from "@/lib/portfolio-data";
import { MagneticLink } from "../ui/MagneticLink";
import { ExpandableButton } from "../ui/ExpandableButton";

const heroProject = featuredProjects[0];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? false : { opacity: 0, y: 52 };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-page-bg)] pt-24">
      <div aria-hidden="true" className="surface-grid absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div aria-hidden="true" className="absolute -right-[14vw] top-[12vh] h-[42vw] min-h-80 w-[42vw] min-w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="site-container relative z-10 grid min-h-[calc(100dvh-6rem)] grid-cols-1 content-between gap-10 pb-8 md:pb-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-9 lg:py-12">
          <h1 className="text-balance text-[clamp(3.25rem,15vw,6.5rem)] leading-[0.84] text-[var(--color-heading)] sm:text-[clamp(4.5rem,12vw,8rem)] lg:text-[clamp(6rem,9.2vw,9.2rem)]">
            <motion.span
              className="block"
              initial={rise}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              DIGITAL MIT
            </motion.span>
            <motion.span
              className="block text-accent lg:pl-[10vw]"
              initial={rise}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              CHARAKTER
            </motion.span>
          </h1>

          <motion.div
            className="mt-8 flex max-w-xl flex-col gap-6 sm:mt-10"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-[48ch] text-base leading-relaxed text-[var(--color-text)] sm:text-lg md:text-xl">
              Websites, Apps und Content für Unternehmen, die digital nicht austauschbar wirken wollen.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <ExpandableButton />
              <MagneticLink
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[var(--color-navbar-border)] bg-[var(--color-page-bg)] px-7 font-accent text-lg text-[var(--color-heading)] transition-colors hover:bg-[var(--color-heading)] hover:text-[var(--color-page-bg)] active:scale-[0.98]"
              >
                Kontakt
              </MagneticLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-[-8%] top-[20%] -z-10 hidden w-[34%] rotate-3 lg:block lg:z-0"
          initial={reduceMotion ? false : { opacity: 0, x: 70, rotate: 7 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 1, delay: reduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={`/portfolio/${heroProject.slug}`}
            aria-label={`${heroProject.title} im Portfolio öffnen`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-[0_36px_90px_rgb(28_27_26_/_18%)]">
              <Image
                src={heroProject.imageUrl}
                alt={heroProject.title}
                fill
                priority
                sizes="(max-width: 1023px) 1px, 34vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-text)]">{heroProject.title}</p>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
