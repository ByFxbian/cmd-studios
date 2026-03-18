'use client';

import { motion, type Variants } from 'framer-motion';
import { HiOutlineLightningBolt, HiOutlineCode, HiOutlineEye, HiOutlineChatAlt2 } from 'react-icons/hi';
import Image from 'next/image';

const bentoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function ValuesBentoSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto max-w-7xl px-6">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-6xl md:text-7xl font-normal tracking-normal text-white">
            Unsere Prinzipien
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-zinc-400">
            Wir arbeiten nicht einfach nur ab. Wir denken mit, hinterfragen, was sinnvoll ist, und legen Wert auf Ergebnisse, die langfristig überzeugen.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={bentoVariants}
            className="md:col-span-2 row-span-1 p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
                <HiOutlineLightningBolt className="w-16 h-16 text-accent mb-6" />
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Performance First</h3>
                    <p className="text-md md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Performance ist kein Extra, sondern Grundlage. Wir achten auf schnelle Ladezeiten, flüssige Abläufe und eine technische Basis, die von Anfang an durchdacht ist.
                    </p>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors duration-500" />
          </motion.div>

          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-2 rounded-3xl overflow-hidden relative border border-zinc-800 group"
          >
             <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                alt="Teamwork Meeting" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <HiOutlineChatAlt2 className="w-12 h-12 text-white mb-4" />
                <h3 className="text-3xl font-bold mb-3 text-white">Direkter Draht</h3>
                <p className="text-zinc-300 text-md md:text-lg leading-relaxed">
                  Bei uns sprechen Sie direkt mit den Menschen, die gestalten und umsetzen. Ohne Umwege, ohne Vertriebsschicht dazwischen.
                </p>
            </div>
          </motion.div>

          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-1 p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm flex flex-col justify-between group"
          >
            <HiOutlineEye className="w-12 h-12 text-accent" />
            <div>
                <h3 className="text-3xl font-bold mb-3 text-white">Visuelle Präzision</h3>
                <p className="text-zinc-400 text-md md:text-md">
                Gestaltung endet für uns nicht beim guten Eindruck. Wir achten auf Proportion, Rhythmus, Details und eine visuelle Sprache, die stimmig wirkt.
                </p>
            </div>
          </motion.div>

          <motion.div 
            variants={bentoVariants}
            className="md:col-span-1 row-span-1 p-8 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <HiOutlineCode className="w-12 h-12 text-accent relative z-10" />
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-3 text-white">Clean Code</h3>
                <p className="text-zinc-400 text-md md:text-md">
                  Wir entwicklen so, dass Projekte verständlich, wartbar und erweiterbar bleiben - nicht nur für den Launch, sondern auch für alles danach.
                </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}