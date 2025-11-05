'use client';

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Testimonial, testimonials } from "@/lib/testimonial-data";
import { useMeasure } from "@uidotdev/usehooks";
import { AnimatePresence, PanInfo, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { SectionMask } from "../ui/SectionMask";

const DRAG_THRESHOLD = 150;

const cardVariants: Variants = {
  initial: ([relativePosition]: [number, number]) => ({
    x: relativePosition === 0 ? 0 : relativePosition * 20,
    y: relativePosition * 20,
    scale: 1 - relativePosition * 0.05,
    opacity: 1,
    zIndex: testimonials.length - relativePosition,
  }),
  animate: ([relativePosition]: [number, number]) => ({
    x: relativePosition * 20,
    y: relativePosition * 20,
    scale: 1 - relativePosition * 0.05,
    opacity: relativePosition > 1 ? 0 : 1,
    zIndex: testimonials.length - relativePosition,
  }),
  exit: ([relativePosition, exitDirection]: [number, number]) => ({
    x: exitDirection > 0 ? 300 : -300, 
    opacity: 0,
    transition: { duration: 0.3 }
  })
}

export function TestimonialsSection() {
    const [index, setIndex] = useState(0);
    const [exitDirection, setExitDirection] = useState(0);

    const [ref, { height }] = useMeasure();

    const isMobile = useMediaQuery("(max-width: 767px)");

    const showNext = () => {
        setExitDirection(-1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };
    
    const showPrev = () => {
        setExitDirection(1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if(info.offset.x > DRAG_THRESHOLD) {
            showPrev();
        } else if (info.offset.x < -DRAG_THRESHOLD) {
            showNext();
        }
    };

    return (
        <section className="w-full py-20 md:py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-heading)]">
                        Das sagen unsere Kunden
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text)]">
                        Echtes Feedback von echten Partnern.
                    </p>
                </motion.div>

                <motion.div 
                    className="relative max-w-2xl mx-auto"
                    animate={{ height: isMobile ? (height || 350) : 350 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30}}
                >
                    <AnimatePresence mode="wait">
                        {testimonials.map((testimonial, i) => {
                            if(i < index) return null;
                            if(i > index + 2) return null;

                            const isActive = i === index;
                            const relativePosition = i - index;

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    ref={isActive ? ref : null}
                                    className={`absolute w-full h-auto md:h-full p-8 bg-white rounded-lg shadow-xl border border-zinc-200
                                        ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
                                    variants={cardVariants}
                                    custom={[relativePosition, exitDirection]}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    
                                    drag={isActive ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
                                    onDragEnd={onDragEnd}
                                >
                                    <CardContent testimonial={testimonial} />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                <div className="flex justify-center gap-4 mt-16">
                    <button
                        onClick={showPrev}
                        className="bg-white rounded-full p-3 shadow-lg border border-zinc-200 text-zinc-600
                                hover:bg-zinc-100 transition-colors disabled:opacity-50"
                    >
                        <HiArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={showNext}
                        className="bg-white rounded-full p-3 shadow-lg border border-zinc-200 text-zinc-600
                                hover:bg-zinc-100 transition-colors disabled:opacity-50"
                    >
                        <HiArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

function CardContent({ testimonial }: { testimonial: Testimonial }) {
    return (
    <div className="flex flex-col md:flex-row items-center h-full gap-8 py-4 md:py-0">
      {/* Bild */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden shadow-md">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
      {/* Zitat */}
      <div className="relative text-center md:text-left">
        <FaQuoteLeft className="absolute -top-4 left-0 text-3xl text-accent/20 hidden md:block" />
        <p className="text-lg md:text-xl font-medium text-[var(--color-text)] mb-4">
          &quot;{testimonial.quote}&quot;
        </p>
        <p className="font-bold text-lg text-[var(--color-heading)]">
          {testimonial.name}
        </p>
        <p className="text-md text-[var(--color-text-muted)]">
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}