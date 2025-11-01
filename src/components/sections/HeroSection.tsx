'use client';

import { Suspense } from 'react';
import { motion, type Variants } from "framer-motion";

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
    return (
        <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center">
            <motion.div
                className="relative z-10 flex flex-col items-center text-center p-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-zinc-900"
                    variants={itemVariants}
                >
                    Digitale Exzellenz.
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-500">
                        Von Code bis Content.
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl text-lg md:text-xl text-zinc-700 mb-8"
                    variants={itemVariants}
                >
                    CMD Studios: Wir entwickeln performante Websites und produzieren
                    fesselnde Videos, die Ihre Marke definieren.
                </motion.p>

                <motion.div className="flex gap-4" variants={itemVariants}>
                    <button className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-dark transition-colors">
                        Unsere Arbeit
                    </button>
                    <button className="bg-transparent border border-zinc-300 text-zinc-700 font-semibold px-6 py-3 rounded-md hover:bg-zinc-100 transition-colors">
                        Kontakt
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}