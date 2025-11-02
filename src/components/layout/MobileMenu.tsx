'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Link from 'next/link';
import { type FC, useEffect } from 'react';

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

const curtainVariants1: Variants = {
  open: (originY: 'top' | 'bottom') => ({
    scaleY: 0,
    originY,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }
  }),
  closed: (originY: 'top' | 'bottom') => ({
    scaleY: 1,
    originY,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
  })
};

const curtainVariants2: Variants = {
  open: (originY: 'top' | 'bottom') => ({
    scaleY: 0,
    originY,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
  }),
  closed: (originY: 'top' | 'bottom') => ({
    scaleY: 1,
    originY,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }
  })
};

const linkListVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.8 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.2 }
  }
};

const linkItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } }
  }
};

export const MobileMenu: FC<{ isOpen: boolean, toggle: () => void }> = ({ isOpen, toggle }) => {
    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
       document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-wrapper"
          className="md:hidden"
        >
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-accent z-[81] scale-[1.01]"
            initial={{ scaleY: 0, originY: 'top' }}
            animate={{ 
              scaleY: 1, 
              originY: 'top',
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }
             }}
            exit={{ 
              scaleY: 0, 
              originY: 'top',
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
             }}
          />
          
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-zinc-900 z-[82] flex items-center justify-center scale-[1.01]"
            initial={{ scaleY: 0, originY: 'top' }}
            animate={{ 
                scaleY: 1, 
                originY: 'top',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
            }}
            exit={{ 
                scaleY: 0, 
                originY: 'top',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }
            }}
          >
            <motion.ul
              className="flex flex-col items-center gap-6"
              variants={linkListVariants}
              initial="closed"
              animate="open"
              exit="closed" 
            >
              {LINKS.map((link) => (
                <motion.li key={link.href} variants={linkItemVariants}>
                  <Link
                    href={link.href}
                    onClick={toggle} 
                    className="text-4xl font-bold text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};