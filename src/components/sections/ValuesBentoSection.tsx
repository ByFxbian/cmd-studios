'use client';

import { motion, type Variants } from 'framer-motion';
import { HiOutlineLightningBolt, HiOutlineCode, HiOutlineEye, HiOutlineChatAlt2 } from 'react-icons/hi';
import Image from 'next/image';

const bentoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function ValuesBentoSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Überschrift */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
            Unser Ansatz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
            Wir glauben an Performance, Präzision und Partnerschaft. 
            So setzen wir Projekte um.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 1. Performance */}
          <motion.div 
            variants={bentoVariants}
            className="md:col-span-2 row-span-1 p-8 bg-white rounded-lg shadow-lg border border-zinc-200 flex flex-col justify-center"
          >
            <HiOutlineLightningBolt className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2 text-zinc-900">Performance Zuerst</h3>
            <p className="text-zinc-700">
              Millisekunden entscheiden. Wir bauen Websites, die nicht nur schnell aussehen, sondern 
              messbar schnell sind (Core Web Vitals).
            </p>
          </motion.div>

          {/* 2. Kommunikation */}
          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-2 p-8 bg-white rounded-lg shadow-lg border border-zinc-200 flex flex-col"
          >
            <HiOutlineChatAlt2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2 text-zinc-900">Radikal Transparent</h3>
            <p className="text-zinc-700 grow">
              Kein Agentur-Blabla. Wir sind Ihre erweiterte Werkbank. 
              Sie sprechen direkt mit uns – dem Entwickler und dem Kreativen.
            </p>
            <div className="relative aspect-square w-full h-auto mt-4 rounded overflow-hidden">
                <Image 
                    src="https://placehold.co/600x600.png?text=Teamwork" 
                    alt="Kommunikation" 
                    fill 
                    className="object-cover"
                />
            </div>
          </motion.div>

          {/* 3. Ästhetik */}
          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-2 p-8 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 text-white"
          >
            <HiOutlineEye className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2">Visuelle Präzision</h3>
            <p className="text-zinc-300 grow">
              Gutes Design ist unsichtbar. Wir legen Wert auf saubere Typografie, 
              sinnvolle Animationen und ein UI, das funktioniert.
            </p>
          </motion.div>

          {/* 4. Code-Qualität */}
          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-1 p-8 bg-white rounded-lg shadow-lg border border-zinc-200 flex flex-col justify-center"
          >
            <HiOutlineCode className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2 text-zinc-900">Clean Code</h3>
            <p className="text-zinc-700">
              Skalierbarer, wartbarer und moderner Code (TypeScript, React) 
              ist die Basis für jedes erfolgreiche Projekt.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}