"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isLoaded } = useLoading();

  useLayoutEffect(() => {
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
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-accent z-50"
          variants={curtainVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
        />
        
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-zinc-900 z-40"
          variants={curtainVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}