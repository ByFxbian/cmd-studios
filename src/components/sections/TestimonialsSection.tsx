'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/testimonial-data";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="w-full py-20 md:py-32 bg-[var(--color-page-bg)] overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                
                <div className="mb-12 flex items-center gap-4">
                    <div className="h-px w-12 bg-accent" />
                    <span className="uppercase tracking-widest text-lg font-accent text-accent">Client Stories</span>
                </div>

                <div className="relative min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center"
                        >
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight text-[var(--color-heading)] mb-8 tracking-normal md:indent-[-0.5em]">
                                    &ldquo;{currentTestimonial.quote}&rdquo;
                                </h2>
                                
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-bold text-[var(--color-heading)]">{currentTestimonial.name}</span>
                                    <span className="text-2xl tracking-wider text-[var(--color-text-muted)]">{currentTestimonial.company}</span>
                                </div>
                            </div>

                            <div className="relative w-20 h-20 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-2 border-zinc-200">
                                <Image 
                                    src={currentTestimonial.imageUrl} 
                                    alt={currentTestimonial.name}
                                    fill
                                    sizes="(max-width: 768px) 80px, 160px"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-between items-center mt-16 border-t border-zinc-200 pt-8">
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button 
                                type="button"
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-12 bg-accent' : 'w-4 bg-zinc-300 hover:bg-zinc-400'}`}
                                aria-label={`Gehe zu Testimonial ${idx + 1}`}
                                aria-current={idx === currentIndex ? 'true' : undefined}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button type="button" onClick={handlePrev} aria-label="Vorheriges Testimonial" className="p-4 rounded-full border border-zinc-200 hover:bg-zinc-100 hover:scale-110 transition-all active:scale-95">
                            <HiArrowLeft aria-hidden="true" className="w-6 h-6 text-[var(--color-heading)]" />
                        </button>
                        <button type="button" onClick={handleNext} aria-label="Nächstes Testimonial" className="p-4 rounded-full bg-[var(--color-heading)] text-[var(--color-page-bg)] hover:scale-110 transition-all active:scale-95 shadow-lg">
                            <HiArrowRight aria-hidden="true" className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
