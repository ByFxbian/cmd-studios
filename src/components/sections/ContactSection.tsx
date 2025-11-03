'use client';

import { motion, type Variants } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import { MagneticLink } from '../ui/MagneticLink';

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function ContactSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-zinc-100 border-y border-zinc-200">
      <motion.div 
        className="container mx-auto max-w-4xl px-6 text-center"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-heading)]">
          Lassen Sie uns Ihr Projekt starten.
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-[var(--color-text)]">
          Egal ob Sie eine neue Website, ein beeindruckendes Video oder 
          ein komplettes Rebranding benötigen – wir sind bereit, 
          Ihre Vision Realität werden zu lassen.
        </p>
        
        <MagneticLink
          href="/contact" 
          className="group inline-flex items-center justify-center gap-2 
                     bg-accent text-white font-semibold 
                     px-8 py-4 rounded-full text-lg 
                     mt-10 transition-all hover:bg-accent-dark shadow-xl shadow-accent/20"
        >
          Projekt anfragen <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </MagneticLink>
      </motion.div>
    </section>
  );
}