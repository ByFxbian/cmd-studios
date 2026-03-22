'use client';

import { useState } from 'react';
import { packages, type PackageCategory } from '@/lib/package-data';
import { PackageCard } from '../ui/PackageCard';
import { MagneticLink } from '../ui/MagneticLink';
import { motion, type Variants, AnimatePresence } from 'framer-motion';

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
  const [activeCategory, setActiveCategory] = useState<PackageCategory>('web');
  
  const filteredPackages = packages.filter(pkg => pkg.category === activeCategory);

  return (
    <section className="w-full py-20 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-12"
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
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="inline-flex items-center p-1.5 bg-zinc-200/60 rounded-full">
            <button
              onClick={() => setActiveCategory('web')}
              className={`relative px-6 py-2.5 md:px-10 md:py-3 rounded-full text-sm md:text-lg font-bold transition-colors duration-300 outline-none ${
                activeCategory === 'web' ? 'text-black' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              Web Pakete
              {activeCategory === 'web' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveCategory('content')}
              className={`relative px-6 py-2.5 md:px-10 md:py-3 rounded-full text-sm md:text-lg font-bold transition-colors duration-300 outline-none ${
                activeCategory === 'content' ? 'text-black' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              Content Pakete
              {activeCategory === 'content' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredPackages.map((pkg) => (
              <motion.div key={pkg.id} variants={cardVariants} className="h-full">
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-20 md:mt-32 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-heading)] mb-6">
            Kein passendes Paket dabei?
          </h3>
          <p className="text-xl md:text-2xl text-[var(--color-text)] tracking-wide mb-10 leading-relaxed max-w-3xl mx-auto">
            Jedes Unternehmen ist einzigartig. Wenn Sie sich unsicher sind, welches Setup das richtige für Sie ist, oder sie spezielle Anforderungen haben: Lassen Sie uns in einem kurzen, kostenlosen Gespräch gemeinsam herausfinden, was Ihr Projekt wirklich braucht.
          </p>
          <div className="flex justify-center">
            <MagneticLink
              href="/contact"
              className="inline-block px-8 py-5 bg-zinc-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Gespräch vereinbaren
            </MagneticLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}