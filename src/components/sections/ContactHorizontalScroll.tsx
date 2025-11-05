/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
"use client";

import { FormEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { HiArrowLeft, HiArrowRight, HiOutlineArrowRight } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { ContactSuccessAnimation } from '../ui/ContactSuccessAnimation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TOTAL_PANELS = 3;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export function ContactHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const pathname = usePathname();
  const programmatic = useRef(false);
  const lastDir = useRef<1 | -1>(1);
  const stRef = useRef<ScrollTrigger | null>(null);
  const rafId = useRef<number | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  const getScrollTrigger = () => stRef.current ?? (ScrollTrigger.getById("contact-scroll") as ScrollTrigger | null);
  const getIndexByFloat = (st: ScrollTrigger, total: number) => st.progress * (total - 1);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const goToIndex = (index:number) => {
    const st = getScrollTrigger();
    if(!st) return;

    const total = document.querySelectorAll(".panel").length;
    const clamped = Math.max(0, Math.min(total - 1, index));
    const y = st.start + (st.end - st.start) * (clamped / (total - 1));

    programmatic.current = true;
    gsap.to(window, {
        scrollTo: { y, autoKill: false},
        duration: 0.6,
        ease: 'power2.inOut',
        overwrite: 'auto',
        onComplete: () => { programmatic.current = false; }
    });
  };

  const goNext = () => {
    const st = getScrollTrigger();
    if(!st) return;
    const total = document.querySelectorAll(".panel").length;
    const idxFloat = getIndexByFloat(st, total);
    const current = Math.round(idxFloat);
    goToIndex(current + 1);
  };

  const goPrev = () => {
    const st = getScrollTrigger();
    if(!st) return;
    const total = document.querySelectorAll(".panel").length;
    const idxFloat = getIndexByFloat(st, total);
    const current = Math.round(idxFloat);
    goToIndex(current - 1);
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const threshold = 0.25;
        let ctxCleanup: (() => void) | null = null;

        const init = () => {
            const el = sectionRef.current;
            if(!el) { rafId.current = requestAnimationFrame(init); return;}

            const panels = Array.from(el.querySelectorAll<HTMLElement>('.panel'));
            if(el.offsetWidth === 0 || panels.length < 2) {
                rafId.current = requestAnimationFrame(init);
                return;
            }

            const ctx = gsap.context(() => {
                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        id: "contact-scroll",
                        trigger: el,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${el.offsetWidth * (panels.length - 1)}`,
                        onUpdate: (self) => {
                            const v = (self as any).getVelocity?.() ?? 1;
                            lastDir.current = v < 0 ? -1 : 1;

                            const idx = Math.round(self.progress * (panels.length - 1));
                            setActivePanel(idx);
                            if (idx === 2) {
                                document.body.classList.add('on-dark-panel');
                            } else {
                                document.body.classList.remove('on-dark-panel');
                            }
                        },
                        onRefresh: (self) => { stRef.current = self; },
                    },
                });

                const onScrollEnd = () => {
                    const st = stRef.current;
                    if (!st || programmatic.current) return;
                    const total = panels.length;
                    const idxFloat = st.progress * (total - 1)
                    const base = Math.floor(idxFloat);
                    const frac = idxFloat - base;

                    const v = (st as any).getVelocity?.() ?? 0;
                    const dir = v < 0 ? -1 : 1;

                    let targetIndex: number;

                    if (dir > 0) {
                        targetIndex = base + (frac >= threshold ? 1 : 0);
                    } else {
                        targetIndex = base + (frac > 1 - threshold ? 1 : 0);
                    }

                    targetIndex = Math.max(0, Math.min(total - 1, targetIndex));

                    const y = st.start + (st.end - st.start) * (targetIndex / (total - 1));

                    programmatic.current = true;
                    gsap.to(window, {
                        scrollTo: { y, autoKill: false },
                        duration: 0.5,
                        ease: "power2.inOut",
                        overwrite: "auto",
                        onComplete: () => { programmatic.current = false; }
                    });
                };

                ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);

                ctxCleanup = () => {
                    ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
                    ctx.revert();
                };

                ScrollTrigger.refresh();
            }, sectionRef);

            if ((document as any).fonts?.ready) {
                (document as any).fonts.ready.then(() => ScrollTrigger.refresh());
            }

            roRef.current = new ResizeObserver(() => {
                if (stRef.current && sectionRef.current) {
                    const elNow = sectionRef.current;
                    const pNow = Array.from(elNow.querySelectorAll<HTMLElement>('.panel'));
                    stRef.current.vars.end = () => `+=${elNow.offsetWidth * (pNow.length - 1)}`;
                    ScrollTrigger.refresh();
                }
            });
            roRef.current.observe(el);
        };

        rafId.current = requestAnimationFrame(init);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            roRef.current?.disconnect();
            roRef.current = null;
            ctxCleanup?.();
        };
    });

    return () => {
        mm.revert();
    }
  }, [pathname]);

  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Etwas ist schiefgelaufen.');
        }

        setStatus('success');
    } catch (error: any) {
        console.error(error);
        setStatus('error');
        setErrorMessage(error.message);
    }
  };

  return (
    <section ref={sectionRef} className="overflow-hidden">
        <div 
            ref={panelsRef}
            className="flex w-full flex-col md:w-[300vw] md:flex-row" // 3 Panels * 100vw = 300vw
        >
            <motion.div 
                className="panel flex h-auto min-h-screen w-full items-center justify-center p-8 bg-zinc-100 md:h-screen md:w-screen"
                variants={isMobile ? panelVariants : {}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="text-center max-w-2xl">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900">
                    Bereit, etwas
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                        Neues zu starten?
                    </span>
                    </h1>
                    <p className="text-2xl text-zinc-700 mt-6">
                    Scrollen Sie weiter, um mit uns in Kontakt zu treten.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                className="panel flex h-auto min-h-screen w-full items-center justify-center p-8 bg-white md:h-screen md:w-screen"
                variants={isMobile ? panelVariants : {}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="w-full max-w-lg no-hscroll-on-form">
                    <AnimatePresence mode="wait">
                        {status !== 'success' && (
                            <motion.div
                                key="form"
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-heading)] mb-4">
                                    Schreiben Sie uns.
                                </h2>
                                <p className="text-lg text-[var(--color-text)] mb-8">
                                    Wir freuen uns darauf, von Ihrer Idee zu hören und 
                                    sie gemeinsam umzusetzen.
                                </p>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">Name</label>
                                        <input type="text" id="name" name="name" required 
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-md 
                                                    text-[var(--color-heading)] focus:ring-2 focus:ring-accent focus:outline-none"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">E-Mail</label>
                                        <input type="email" id="email" name="email" required 
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-md 
                                                        text-[var(--color-heading)] focus:ring-2 focus:ring-accent focus:outline-none"/>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">Deine Nachricht</label>
                                        <textarea id="message" name="message" rows={5} required 
                                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-md 
                                                            text-[var(--color-heading)] focus:ring-2 focus:ring-accent focus:outline-none"/>
                                    </div>
                                    <MagneticButton
                                        type="submit"
                                        className="group inline-flex items-center justify-center gap-2 
                                                    bg-accent text-white font-semibold 
                                                    px-8 py-3 rounded-full text-lg 
                                                    mt-6 transition-all hover:bg-accent-dark shadow-xl shadow-accent/20"
                                        disabled={status === 'submitting'}
                                        >
                                        {status === 'submitting' ? 'Sende...' : 'Anfrage senden'}
                                        <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </MagneticButton>

                                    {status === 'error' && (
                                        <p className="text-red-600 mt-4">
                                            Fehler: {errorMessage}
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        )}

                        {status === 'success' && (
                            <motion.div key="success" className="h-[450px]">
                                <ContactSuccessAnimation />
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </motion.div>
        
            <motion.div 
                id="dark-contact-panel"
                className="panel flex h-auto min-h-screen w-full items-center justify-center p-8 bg-zinc-900 text-white md:h-screen md:w-screen"
                variants={isMobile ? panelVariants : {}}
                initial="hidden"
                whileInView={isMobile ? "visible" : ""}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="text-left max-w-lg">
                    <h2 className="text-4xl font-bold mb-8">
                    Oder treffen wir uns.
                    </h2>
                    <div className="space-y-4 text-xl">
                    <p>
                        <strong className="text-accent">E-Mail:</strong><br/>
                        <a href="mailto:hallo@cmdstudios.de" className="hover:underline">hallo@cmdstudios.de</a>
                    </p>
                    <p>
                        <strong className="text-accent">Standort:</strong><br/>
                        Ein Co-Working Space in deiner Nähe
                    </p>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="fixed bottom-10 right-10 z-50 gap-3 md:flex hidden">
            <button
                onClick={() => goPrev()}
                disabled={activePanel === 0}
                className="bg-[var(--color-scroll-button-bg)] rounded-full p-3 shadow-lg text-[var(--color-scroll-button-text)]
                            hover:bg-[var(--color-scroll-button-hover-bg)] disabled:opacity-30 disabled:cursor-not-allowed
                            transition-opacity"
                aria-label="Vorheriges Panel"
            >
            <HiArrowLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => goNext()}
                disabled={activePanel === (TOTAL_PANELS - 1)}
                className="bg-[var(--color-scroll-button-bg)] text-[var(--color-scroll-button-text)] rounded-full p-3 shadow-lg
                            hover:bg-[var(--color-scroll-button-hover-bg)] disabled:opacity-30 disabled:cursor-not-allowed
                            transition-opacity"
                aria-label="Nächstes Panel"
            >
            <HiArrowRight className="w-6 h-6" />
            </button>
        </div>
    </section>
  );
}