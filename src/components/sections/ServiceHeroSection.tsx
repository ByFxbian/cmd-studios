'use client';

import { motion, type Variants } from "framer-motion";
import { HeroCanvas } from "../ui/HeroCanvas";
import { ImageTrail } from "../ui/ImageTrail";
import { RefObject, useRef } from "react";

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

export function ServiceHeroSection({title}: { title?: string }) {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center pt-20">
            <HeroCanvas />
            <ImageTrail containerRef={sectionRef as RefObject<HTMLElement>} />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-page-bg)] to-transparent z-[1]" />
            <motion.div
                className="relative z-10 flex flex-col items-center text-center p-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[var(--color-heading)]"
                    variants={itemVariants}
                >
                    {title || "Unsere Leistungen" }
                </motion.h1>

                {!title && (
                <motion.p
                    className="max-w-2xl text-lg md:text-xl text-[var(--color-text)]"
                    variants={itemVariants}
                >
                    Technisches Know-how trifft auf kreative Umsetzung.
                    Wir designen und entwickeln die digitalen Erlebnisse von morgen.
                </motion.p>
                )}
            </motion.div>
        </section>
    )
}