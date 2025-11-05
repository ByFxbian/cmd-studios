'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';
import { LoaderLogo } from '@/components/ui/LoaderLogo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ClientLoader() {
    const { isLoaded, setIsLoaded: setGlobalIsLoaded } = useLoading();
    const [isMinTimePassed, setIsMinTimePassed] = useState(false);
    const pathname = usePathname();

    const [isDesktop] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });

    useEffect(() => {
        if(!isLoaded) return;

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.getAll().forEach(t => t.kill());

        if(pathname === '/contact') {
            setTimeout(() => {
                ScrollTrigger.create({
                trigger: "#dark-contact-panel",
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => document.body.classList.add('on-dark-panel'),
                onLeaveBack: () => document.body.classList.add('on-dark-panel'),
                onLeave: () => document.body.classList.remove('on-dark-panel'),
                onEnterBack: () => document.body.classList.remove('on-dark-panel'),
                });
            }, 100);
        } else {
            document.body.classList.remove('on-dark-panel');
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            document.body.classList.remove('on-dark-panel');
        }
    }, [isLoaded, pathname])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinTimePassed(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            if (isMinTimePassed) {
                setGlobalIsLoaded(true);
            }
        } else {
            if (isMinTimePassed) {
                setGlobalIsLoaded(true);
            }
        }
    }, [isMinTimePassed, setGlobalIsLoaded]);

    const curtainOpenDelay = isDesktop ? 1.0 : 0.2;

    return (
        <>
            <AnimatePresence>
            {!isLoaded && (
                <motion.div
                key="loader-screen"
                className='fixed top-0 left-0 w-full h-screen bg-transparent z-[111] flex items-center justify-center' // 51 vorher
                {...(!isDesktop && { exit: { opacity: 0, transition: { duration: 0.2 } } })}
                >
                    <LoaderLogo isDesktop={isDesktop} />
                </motion.div>
            )}
            </AnimatePresence>

            <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-accent z-[109] scale-[1.01]" // 40 vorher
            initial={{ scaleY: 1, originY: 'bottom' }}
            animate={isLoaded ? { scaleY: 0, originY: 'top' } : { scaleY: 1, originY: 'bottom' }}
            exit={{ scaleY: 1, originY: 'top' }}
            transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1], 
                delay: isLoaded ? curtainOpenDelay : 0 
            }}
            />
            
            <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-zinc-900 z-[110] scale-[1.01]" // 50 vorher
            initial={{ scaleY: 1, originY: 'bottom' }}
            animate={isLoaded ? { scaleY: 0, originY: 'top' } : { scaleY: 1, originY: 'bottom' }}
            exit={{ scaleY: 1, originY: 'top' }}
            transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1], 
                delay: isLoaded ? curtainOpenDelay + 0.1 : 0.1 
            }}
            />
        </>
    )
}