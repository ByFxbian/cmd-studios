'use client';

import { motion, type Variants } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
};

export const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "110%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedText({ text }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
          style={{ marginRight: index === words.length - 1 ? 0 : '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
