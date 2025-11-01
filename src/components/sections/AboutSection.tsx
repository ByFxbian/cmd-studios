"use client";

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, // Eine "Pop-Out"-Ease
  },
};

export function AboutSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <motion.div variants={itemVariants}>
            <span className="text-accent font-semibold uppercase tracking-wider">
              Das Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-heading)] mt-3 mb-6">
              Ein Entwickler. Ein Kreativer.
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-text)]">
              <p>
                Wir sind Fabian und Antonio. Was als 
                gemeinsame Leidenschaft für digitale Medien begann, ist heute 
                CMD Studios – eine agile Agentur für Web & Video.
              </p>
              <p>
                Fabians Part ist der Code: Er baut performante, moderne Websites, 
                die technisch überzeugen. Antonios Part ist die Story: Er fängt 
                Momente ein und verwandelt Ideen in fesselnde Videos und starkes 
                Branding.
              </p>
            </div>
            <button className="group mt-8 flex items-center gap-2 bg-transparent text-accent font-semibold transition-colors">
              Mehr über uns erfahren
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.div 
              className="relative aspect-square rounded-lg overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="https://placehold.co/600x600.png?text=Fabian"
                alt="Foto von Fabian"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="relative aspect-square rounded-lg overflow-hidden mt-12"
              variants={imageVariants}
            >
              <Image
                src="https://placehold.co/600x600.png?text=Antonio"
                alt="Foto von Antonio"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}