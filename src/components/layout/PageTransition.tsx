"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';
import { LoaderLogo } from '../ui/LoaderLogo';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isLoaded } = useLoading();


  const [isDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  const logoFadeOutDuration = 0.5;
  const curtainOpenDelay = 1.0;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    return () => {
        const triggers = ScrollTrigger.getAll();
        triggers.forEach((trigger) => {
            trigger.kill(); 
        });
    }
  }, [pathname]);

  const curtainVariants = {
    initial: { scaleY: 1, originY: 'bottom' },
    animate: { scaleY: 0, originY: 'top' },
    exit: { scaleY: 1, originY: 'top' },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>

        {children}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              key="loader-screen"
              className='fixed top-0 left-0 w-full h-screen bg-transparent z-[51] flex items-center justify-center'
            >
              <LoaderLogo isDesktop={isDesktop} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-accent z-40 scale-[1.01]"
          //variants={curtainVariants}
          //initial="initial"
          //animate={isLoaded ? "animate" : "initial"}
          //exit="exit"
          //transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
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
          className="fixed top-0 left-0 w-full h-screen bg-zinc-900 z-50 scale-[1.01]"
          //variants={curtainVariants}
          //initial="initial"
          //animate={isLoaded ? "animate" : "initial"}
          //exit="exit"
          //transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          initial={{ scaleY: 1, originY: 'bottom' }}
          animate={isLoaded ? { scaleY: 0, originY: 'top' } : { scaleY: 1, originY: 'bottom' }}
          exit={{ scaleY: 1, originY: 'top' }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1], 
            delay: isLoaded ? curtainOpenDelay + 0.1 : 0.1 
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}