'use client';

import { motion, type Variants } from "framer-motion";
import { HiCode, HiCamera } from "react-icons/hi";
import Link from "next/link";

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
        <section className="w-full -py-20 md:py-32">
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Was wir tun
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
                        Wir kombinieren technische Präzision mit kreativer Vision, um 
                        digitale Erlebnisse zu schaffen, die im Gedächtnis bleiben.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg border border-zinc-200 flex flex-col"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <HiCode className="w-12 h-12 text-accent mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Web-Entwicklung</h3>
                        <p className="text-zinc-600 mb-6 grow">
                        Von ultraschnellen Landing Pages mit Next.js bis hin zu komplexen 
                        Web-Applikationen. Wir bauen performante, SEO-optimierte und 
                        responsive Websites für KMUs.
                        </p>
                        <Link 
                        href="/services#web" 
                        className="text-accent font-semibold hover:text-accent-dark transition-colors"
                        >
                        Mehr über Web-Services &rarr;
                        </Link>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg border border-zinc-200 flex flex-col"
                        custom={1} // Index 1 für die Animation
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <HiCamera className="w-12 h-12 text-accent mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Content Creation</h3>
                        <p className="text-zinc-600 mb-6 grow">
                        Professionelle Videoproduktion, Social-Media-Content und 
                        Branding. Wir erzählen Ihre Geschichte visuell und sorgen dafür, 
                        dass Ihre Botschaft ankommt.
                        </p>
                        <Link 
                        href="/services#video" 
                        className="text-accent font-semibold hover:text-accent-dark transition-colors"
                        >
                        Mehr über Content-Services &rarr;
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}