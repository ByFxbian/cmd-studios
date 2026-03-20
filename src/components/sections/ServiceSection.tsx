'use client';

import { motion, type Variants } from "framer-motion";
import { Code, Video, ArrowRight } from "lucide-react";
import { AnimatedIconLink } from "../ui/AnimatedIconLink";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50},
    visible: (i:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export function ServiceSection() {
    return (
        <section 
            className="w-full py-20 md:py-32 bg-[var(--color-page-bg)]"
        >
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="blob-1" clipPathUnits="objectBoundingBox">
                        <path d="M0.02,0.08 C0.06,0.01 0.18,0.0 0.3,0.02 C0.42,0.04 0.55,-0.01 0.68,0.02 C0.81,0.05 0.92,0.0 0.97,0.07 C1.02,0.14 1.01,0.28 0.99,0.42 C0.97,0.56 1.02,0.7 0.98,0.82 C0.94,0.94 0.84,1.01 0.7,0.98 C0.56,0.95 0.44,1.02 0.3,0.98 C0.16,0.94 0.08,1.0 0.03,0.9 C-0.02,0.8 0.0,0.65 0.01,0.5 C0.02,0.35 -0.02,0.15 0.02,0.08" />
                    </clipPath>
                    <clipPath id="blob-2" clipPathUnits="objectBoundingBox">
                        <path d="M0.03,0.1 C0.08,0.02 0.2,0.01 0.35,0.03 C0.5,0.05 0.6,-0.01 0.72,0.03 C0.84,0.07 0.94,0.01 0.98,0.1 C1.02,0.19 0.99,0.35 0.98,0.48 C0.97,0.61 1.01,0.75 0.97,0.86 C0.93,0.97 0.82,1.01 0.68,0.99 C0.54,0.97 0.42,1.01 0.28,0.98 C0.14,0.95 0.06,1.02 0.02,0.92 C-0.02,0.82 0.01,0.68 0.02,0.54 C0.03,0.4 -0.01,0.18 0.03,0.1" />
                    </clipPath>
                </defs>
            </svg>

            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-normal text-[var(--color-heading)]">
                        Was wir machen
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[var(--color-text)]">
                        Wir verbinden Entwicklung und Content, damit Unternehmen digital besser auftreten. Klar, modern und mit Wiedererkennungswert.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="group"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.08))" }}
                    >
                        <div 
                            className="bg-[var(--color-scroll-button-bg)] p-10 md:p-12 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]"
                            style={{ clipPath: "url(#blob-1)" }}
                        >
                            <Code className="w-12 h-12 text-accent mb-4 stroke-1" />
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-heading)]">Webentwicklung</h3>
                            <p className="text-base md:text-lg text-[var(--color-text)] mb-6 grow">
                            Von schnellen Landingpages bis zu individuellen Webanwendungen: Wir entwickeln Websites, die gut aussehen, sauber funktionieren und auf jedem Gerät überzeugen.
                            </p>
                            <AnimatedIconLink
                                href="/services#web"
                                title="Mehr über Webentwicklung"
                                className="text-sm md:text-lg font-medium text-accent"
                                textClassName="text-base md:text-2xl"
                            >
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </AnimatedIconLink>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.08))" }}
                    >
                        <div 
                            className="bg-[var(--color-scroll-button-bg)] p-10 md:p-12 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]"
                            style={{ clipPath: "url(#blob-2)" }}
                        >
                            <Video className="w-12 h-12 text-accent mb-4 stroke-1" />
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-heading)]">Videoproduktion & Content</h3>
                            <p className="text-base md:text-lg text-[var(--color-text)] mb-6 grow">
                            Von Imagefilmen bis Social Media Content: Wir produzieren visuelle Inhalte, die Marken greifbarer machen und Botschaften klar rüberbringen.
                            </p>
                            <AnimatedIconLink
                                href="/services#video"
                                title="Mehr über Content & Video"
                                className="text-sm md:text-lg font-medium text-accent"
                                textClassName="text-base md:text-2xl"
                            >
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </AnimatedIconLink>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
