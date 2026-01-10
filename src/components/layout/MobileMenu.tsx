'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Link from 'next/link';
import { type FC } from 'react';

const LINKS = [
  { href: "/services", label: "Leistungen" },
  { href: "/portfolio", label: "Arbeiten" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

const linkListVariants: Variants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};
  
const linkItemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    closed: { y: 40, opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
};

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggle }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
             <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-accent z-[190]"
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
                className="fixed top-0 left-0 w-full h-screen bg-zinc-950 z-[191] flex items-center justify-center p-4 overflow-hidden" 
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
                <div className="absolute top-4 right-4 z-[203] md:hidden">
                </div>

                <motion.ul
                  className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-sm"
                  variants={linkListVariants}
                  initial="closed"
                  animate="open"
                  exit="closed" 
                >
                  {LINKS.map((link) => (
                    <motion.li key={link.href} variants={linkItemVariants} className="w-full text-center py-2">
                      <Link
                        href={link.href}
                        onClick={toggle} 
                        className="block text-5xl md:text-7xl font-bold text-white tracking-normal hover:text-accent transition-colors pb-2 leading-tight" 
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};