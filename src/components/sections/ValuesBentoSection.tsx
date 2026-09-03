"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineBolt, HiOutlineChatBubbleLeftRight, HiOutlineCodeBracket, HiOutlineEye } from "react-icons/hi2";

const principles = [
  {
    title: "Performance First",
    text: "Schnelle Ladezeiten, flüssige Abläufe und eine technische Basis, die von Anfang an durchdacht ist.",
    icon: HiOutlineBolt,
    className: "md:col-span-2 bg-accent text-white",
  },
  {
    title: "Direkter Draht",
    text: "Sie sprechen direkt mit den Menschen, die gestalten und umsetzen. Ohne Vertriebsschicht dazwischen.",
    icon: HiOutlineChatBubbleLeftRight,
    className: "md:row-span-2",
    image: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/ANTONIO.png",
  },
  {
    title: "Visuelle Präzision",
    text: "Proportion, Rhythmus und Details werden zu einer visuellen Sprache, die zur Marke passt.",
    icon: HiOutlineEye,
    className: "bg-[var(--color-surface)]",
  },
  {
    title: "Clean Code",
    text: "Projekte bleiben verständlich, wartbar und erweiterbar. Für den Launch und alles danach.",
    icon: HiOutlineCodeBracket,
    className: "bg-[var(--color-heading)] text-[var(--color-page-bg)]",
  },
];

export function ValuesBentoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space bg-[var(--color-page-bg)]">
      <div className="site-container">
        <div className="max-w-3xl">
          <h2 className="text-balance text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.95] text-[var(--color-heading)]">Unsere Prinzipien</h2>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            Wir denken mit, hinterfragen Entscheidungen und bauen Lösungen, die langfristig überzeugen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:auto-rows-[18rem]">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className={`relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-navbar-border)] p-7 sm:p-9 ${principle.className}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {principle.image ? (
                <>
                  <Image src={principle.image} alt="Antonio von CMD Studios" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a] via-[#1c1b1a]/35 to-transparent" />
                </>
              ) : null}
              <div className={`relative z-10 flex h-full flex-col justify-between ${principle.image ? "text-white" : ""}`}>
                <principle.icon aria-hidden="true" className="h-8 w-8" />
                <div>
                  <h3 className="text-2xl md:text-3xl">{principle.title}</h3>
                  <p className={`mt-3 max-w-[44ch] leading-relaxed ${principle.image || index === 0 ? "text-white/82" : index === 3 ? "text-[var(--color-page-bg)]/75" : "text-[var(--color-text)]"}`}>
                    {principle.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
