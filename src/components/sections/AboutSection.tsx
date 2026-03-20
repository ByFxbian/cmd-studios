"use client";

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { AnimatedIconLink } from '../ui/AnimatedIconLink';

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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutSection() {
  const SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

  return (
    <section className="w-full py-20 md:py-32 bg-[var(--color-page-bg)]">
      <div className="container mx-auto max-w-7xl px-6">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div variants={itemVariants}>
            <span className="tracking-widest text-lg font-accent text-accent uppercase">
              Das Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-normal text-[var(--color-heading)] mt-3 mb-6">
              Ein Entwickler. <br />Ein Kreativer.
            </h2>
            <div className="space-y-4 text-base md:text-xl text-[var(--color-text)] leading-relaxed">
              <p>
                Wir sind Fabian und Antonio. Was mit einer gemeinsamen Leidenschaft für digitale Medien begonnen hat, ist heute CMD Studios - Webentwicklung und Videorproduktion aus einer Hand.
              </p>
              <p>
                Fabian entwickelt Websites, die schnell, durchdacht und technisch sauber umgesetzt sind. Antonio kümmert sich um Bild, Story und Schnitt - und macht aus Ideen Inhalte mit Wirkung.
              </p>
            </div>
            <AnimatedIconLink 
              href="/about"
              title="Mehr über uns erfahren"
              className="mt-8 bg-transparent text-accent font-semibold tracking-wide transition-colors text-lg"
            >
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </AnimatedIconLink>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.div 
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-none"
              variants={imageVariants}
            >
              <Image
                src="https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/Fabian.jpeg"
                alt="Foto von Fabian"
                fill
                sizes={SIZES}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <motion.div 
                className="absolute bottom-3 left-3 md:bottom-4 md:left-4"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 bg-[var(--color-page-bg)] rounded-full pl-3 pr-4 py-2 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-heading text-sm md:text-base text-[var(--color-heading)] tracking-tight">Fabian</span>
                    <span className="font-accent text-[10px] md:text-xs text-accent tracking-wider uppercase">Webentwicklung</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="group relative aspect-square rounded-2xl overflow-hidden mt-12 cursor-none"
              variants={imageVariants}
            >
              <Image
                src="https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/ANTONIO.png"
                alt="Foto von Antonio"
                fill
                sizes={SIZES}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <motion.div 
                className="absolute bottom-3 left-3 md:bottom-4 md:left-4"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.7 }}
              >
                <div className="flex items-center gap-2 bg-[var(--color-page-bg)] rounded-full pl-3 pr-4 py-2 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-heading text-sm md:text-base text-[var(--color-heading)] tracking-tight">Antonio</span>
                    <span className="font-accent text-[10px] md:text-xs text-accent tracking-wider uppercase">Videoproduktion</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}