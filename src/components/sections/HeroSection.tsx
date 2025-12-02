'use client';

import { RefObject, Suspense, useRef } from 'react';
import { motion, type Variants } from "framer-motion";
import Link from 'next/link';
import { AnimatedText } from '../ui/AnimatedText';
import { MagneticLink } from '../ui/MagneticLink';
import { HeroCanvas } from '../ui/HeroCanvas';
import { ImageTrail } from '../ui/ImageTrail';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden : { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
        },
    },
};

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className='relative h-screen w-full overflow-hidden bg-[var(--color-page-bg)]'>
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
                <ImageTrail containerRef={sectionRef as RefObject<HTMLElement>} />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-[var(--color-page-bg)] to-transparent z-[1]" />

            <div className="relative z-10 h-full w-full container mx-auto px-6 grid grid-cols-12 grid-rows-6 pt-24 pb-12 pointer-events-none">
                <motion.div 
                    className="col-span-12 md:col-span-10 row-span-2 flex items-end"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tight text-[var(--color-heading)] pointer-events-auto mix-blend-difference">
                        DIGITALE
                    </h1>
                </motion.div>
                <motion.div 
                    className="col-span-12 md:col-span-10 md:col-start-3 row-span-2 flex items-start justify-end"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-accent to-blue-600 pointer-events-auto text-right">
                        EXZELLENZ
                    </h1>
                </motion.div>

                <motion.div 
                    className="col-span-12 md:col-span-5 row-start-5 row-span-2 flex flex-col justify-end pb-8 md:pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <p className="text-xl md:text-2xl text-[var(--color-text)] mb-6 md:mb-8 leading-relaxed max-w-md pointer-events-auto">
                        Wir bauen digitale Produkte, die nicht nur funktionieren, sondern anfühlen. 
                        <span className="block mt-2 text-[var(--color-text-muted)]">Web-Entwicklung & High-End Videoproduktion.</span>
                    </p>
                    
                    <div className="flex flex-wrap gap-4 md:gap-6 pointer-events-auto">
                        <MagneticLink 
                            href="/portfolio"
                            className="group relative px-6 md:px-8 py-3 md:py-4 bg-[var(--color-heading)] text-[var(--color-page-bg)] rounded-full overflow-hidden"
                        >
                             <span className="relative z-10 font-medium group-hover:text-[var(--color-heading)] transition-colors duration-300">Portfolio</span>
                             <div className="absolute inset-0 bg-accent translate-y-[201%] group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1]" />
                        </MagneticLink>
                        <MagneticLink 
                             href="/contact"
                             className="px-6 md:px-8 py-3 md:py-4 border border-[var(--color-text-muted)] rounded-full hover:bg-[var(--color-heading)] hover:text-[var(--color-page-bg)] transition-all duration-300"
                        >
                            Kontakt
                        </MagneticLink>
                    </div>
                </motion.div>
            </div>
        </section>
        
    )
}