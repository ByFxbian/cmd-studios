'use client';

import { RefObject, useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('../ui/HeroCanvas').then(mod => mod.HeroCanvas), { ssr: false });

import { ImageTrail } from '../ui/ImageTrail';
import { MagneticLink } from '../ui/MagneticLink';
import { ExpandableButton } from '../ui/ExpandableButton';

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        console.log("[HeroSection Debug] Component mounted, waiting 800ms before rendering HeroCanvas...");
        const timer = setTimeout(() => {
            console.log("[HeroSection Debug] 800ms passed, rendering HeroCanvas now!");
            setIsTransitioning(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section ref={sectionRef} className='relative h-[100dvh] w-full overflow-hidden bg-[var(--color-page-bg)] bg-[var(--color-page-bg)]'>
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {!isTransitioning && <HeroCanvas />}
                <ImageTrail containerRef={sectionRef as RefObject<HTMLElement>} />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[var(--color-page-bg)] to-transparent z-[1] pointer-events-none" />

            <div className="relative z-10 h-full w-full container mx-auto px-6 flex flex-col justify-center pointer-events-none">
                 
                <div className="flex flex-col relative z-20 -mt-20 md:-mt-0">
                    <h1 className="sr-only">Digitale Exzellenz</h1>
                    <motion.div 
                        className="flex items-end overflow-hidden"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 aria-hidden="true" className="block text-[13vw] md:text-[10vw] leading-[0.8] tracking-tighter text-[var(--color-heading)] pointer-events-auto">
                            DIGITALE
                        </h1>
                    </motion.div>
                    
                    <motion.div 
                        className="flex items-start justify-end overflow-hidden"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <h1 aria-hidden="true" className="block text-[13vw] md:text-[11vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-accent-light via-accent to-accent-dark pointer-events-auto text-right pr-2 md:pr-0">
                            EXZELLENZ
                        </h1>
                    </motion.div>
                </div>

                <motion.div 
                    className="absolute bottom-12 left-6 md:left-6 max-w-xl w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <p className="text-lg md:text-xl text-[var(--color-text)] mb-8 leading-relaxed tracking-wide pointer-events-auto text-left drop-shadow-sm">
                        Wir bauen digitale Produkte, die nicht nur funktionieren, <br className="xs:block sm:hidden" /> sondern anfühlen. 
                        <span className="block mt-2 text-[var(--color-heading)] font-accent text-2xl md:text-3xl italic">Web-Entwicklung & <br className="xs:block sm:hidden" /> High-End Videoproduktion.</span>
                    </p>
                    
                    <div className="flex flex-nowrap gap-4 justify-start pointer-events-auto items-center">
                        <ExpandableButton />
                        <MagneticLink 
                            href="/contact"
                            className="px-8 py-4 border border-[var(--color-text-muted)] rounded-full hover:bg-[var(--color-heading)] hover:text-[var(--color-page-bg)] transition-all duration-300 font-bold h-14 flex items-center font-accent text-xl"
                        >
                            Kontakt
                        </MagneticLink>
                    </div>
                </motion.div>
            </div>
        </section>
        
    )
}
