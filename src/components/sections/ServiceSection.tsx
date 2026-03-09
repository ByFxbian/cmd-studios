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
    // const [isServiceLinkHovering, setIsServiceLinkHovering] = useState(false);

    return (
        <section 
            className="w-full py-20 md:py-32 bg-[var(--color-page-bg)]"
        >
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-normal text-[var(--color-heading)]">
                        Was wir tun
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[var(--color-text)]">
                        Wir kombinieren technische Präzision mit kreativer Vision, um 
                        digitale Erlebnisse zu schaffen, die im Gedächtnis bleiben.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[var(--color-navbar-border)] flex flex-col transition-colors hover:border-accent/50"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Code className="w-12 h-12 text-accent mb-4 stroke-1" />
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-heading)]">Web-Entwicklung</h3>
                        <p className="text-base md:text-lg text-[var(--color-text)] mb-6 grow">
                        Von ultraschnellen Landing Pages mit Next.js bis hin zu komplexen 
                        Web-Applikationen. Wir bauen performante, SEO-optimierte und 
                        responsive Websites für KMUs.
                        </p>
                        <AnimatedIconLink
                            href="/services#web"
                            title="Mehr über Web Services"
                            className="text-lg font-medium text-accent"
                        >
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </AnimatedIconLink>
                    </motion.div>

                    <motion.div
                        className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[var(--color-navbar-border)] flex flex-col transition-colors hover:border-accent/50"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Video className="w-12 h-12 text-accent mb-4 stroke-1" />
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-heading)]">Content Creation</h3>
                        <p className="text-base md:text-lg text-[var(--color-text)] mb-6 grow">
                        Professionelle Videoproduktion, Social-Media-Content und 
                        Branding. Wir erzählen Ihre Geschichte visuell und sorgen dafür, 
                        dass Ihre Botschaft ankommt.
                        </p>
                        <AnimatedIconLink
                            href="/services#video"
                            title="Mehr über Content-Services"
                            className="text-lg font-medium text-accent"
                        >
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </AnimatedIconLink>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}