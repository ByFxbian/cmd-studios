'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';
import { LoaderLogo } from '@/components/ui/LoaderLogo';
import { useState, useEffect } from 'react';

export function ClientLoader() {
    const { isLoaded } = useLoading();

    const [isDesktop] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });

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