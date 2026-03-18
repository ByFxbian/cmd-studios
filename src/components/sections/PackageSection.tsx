'use client';

import { packages } from '@/lib/package-data';
import { PackageCard } from '../ui/PackageCard';
import { motion, type Variants } from 'framer-motion';

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function PackageSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-zinc-50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-heading)]">
            Das passende Paket für Sie
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-[var(--color-text)] tracking-wide">
            Klare Pakete, transparente Leistungen und ein umfang, der zu Ihrem Vorhaben passt. Ohne versteckte Kosten und ohne laufende Stundenabrechnung.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={cardVariants}>
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}