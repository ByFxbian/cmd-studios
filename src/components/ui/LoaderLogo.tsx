'use client';

import { motion, type Variants } from 'framer-motion';

const text = "CMD STUDIOS";

const letters = Array.from(text);

const desktopContainerVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const desktopLetterVariants: Variants = {
  initial: { y: 0, opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: {
    y: "-120%", 
    opacity: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const mobileContainerVariants:Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      repeat: Infinity,
      repeatDelay: 1.0, 
    },
  },
};
const mobileLetterVariants:Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

export function LoaderLogo({ isDesktop }: { isDesktop: boolean }) {
    const containerVariants = isDesktop ? desktopContainerVariants : mobileContainerVariants;
    const letterVariants = isDesktop ? desktopLetterVariants : mobileLetterVariants;

    return (
        <motion.div 
            className="text-4xl font-bold tracking-tight text-white flex"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            {...(isDesktop && { exit: "exit" })}
        >
            {letters.map((letter, index) => (
                <div
                    key={index}
                    style={{
                        overflow: 'hidden',
                        minWidth: letter === ' ' ? '0.5em' : 'auto'
                    }}
                >
                    <motion.span
                        style={{
                            display: 'inline-block',
                            color: index < 3 ? '#FFFFFF' : 'a1a1aa'
                        }}
                        variants={letterVariants}
                    >
                        {letter}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    )
}