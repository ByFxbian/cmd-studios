/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { processSteps } from '@/lib/process-data';
import { useLoading } from '@/context/LoadingContext';
import { HiArrowDown } from 'react-icons/hi';


export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useLoading();

  useLayoutEffect(() => {
    if(!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card', sectionRef.current) as HTMLElement[];
      const totalCards = cards.length;

      gsap.set(cards, { 
        yPercent: (i) => i === 0 ? 0 : 110,
        opacity: 1,
        scale: 1 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${(totalCards) * 100}%`, 
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        const prevCard = cards[i - 1];

        tl.to(card, {
            yPercent: 0, 
            ease: "none",
            duration: 1
        })
        .to(prevCard, {
            scale: 0.90,
            opacity: 0.0,
            ease: "none",
            duration: 1
        }, "<");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section ref={sectionRef} className="relative bg-zinc-950 text-white">
      <div ref={triggerRef} className="hidden lg:flex h-screen w-full overflow-hidden relative">
        <div className="w-1/2 h-full flex flex-col justify-center px-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
                    Unser <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                        Prozess.
                    </span>
                </h2>
                <p className="text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                    Kein Chaos, keine Überraschungen. Wir führen dich strukturiert von der ersten Idee bis zum fertigen Produkt.
                </p>

                <div className="mt-12 flex items-center gap-4 text-lg uppercase tracking-widest text-zinc-500">
                    <span className="w-12 h-px bg-zinc-700"></span>
                    Scroll to explore
                    <HiArrowDown className="animate-bounce" />
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-10 text-[20vw] font-bold text-zinc-900/50 pointer-events-none select-none leading-none">
                04
            </div>
        </div>

        <div className="w-1/2 h-full relative">
            {processSteps.map((step, index) => (
                <div 
                    key={step.id}
                    className="process-card absolute inset-0 w-full h-full flex items-center justify-center p-12"
                    style={{ zIndex: index + 1 }}
                >
                    <div className="w-full max-w-2xl bg-zinc-900 backdrop-blur-xl border border-zinc-800 p-12 rounded-3xl shadow-2xl relative">
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-7xl md:text-8xl font-bold text-zinc-800">{`0${index + 1}`}</span>
                            <div className="px-5 py-1.5 rounded-full border border-accent/30 text-accent text-lg uppercase tracking-widest">
                                Phase {index + 1}
                            </div>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">{step.title}</h3>
                        <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
                            {step.description}
                        </p>

                        <ul className="space-y-4">
                            {step.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-4 text-xl text-zinc-300">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="lg:hidden py-20 px-6">
        <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Unser Prozess.</h2>
            <p className="text-zinc-400">Von der Idee zum Launch in 4 Schritten.</p>
        </div>

        <div className="relative space-y-12">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-zinc-800" />

            {processSteps.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                >
                    <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-full z-10">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                        <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Phase 0{index + 1}</div>
                        <h3 className="text-3xl font-bold mb-3 text-white">{step.title}</h3>
                        <p className="text-zinc-400 text-lg mb-4">{step.description}</p>
                        <ul className="space-y-2">
                            {step.details.slice(0,3).map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-base text-zinc-500">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );

}