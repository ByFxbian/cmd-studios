'use client';

import { motion, type Transition } from 'framer-motion'; 


interface AnimatedStaggeredTextProps {
  text: string;
  isHovering: boolean;
}

const hoverTransition = (i: number):Transition => ({
  duration: 0.2,
  ease:[0.43, 0.13, 0.23, 0.96],
  delay: i * 0.03,
});

const initialTransition = (i: number):Transition => ({
  duration: 0.15,
  ease:[0.43, 0.13, 0.23, 0.96],
  delay: i * 0.02,
});

export function AnimatedStaggeredText({ text, isHovering }: AnimatedStaggeredTextProps) {
  return (
    <div 
      className="relative overflow-hidden text-2xl"
      style={{ lineHeight: '1.3em' }}
    >
      <span className="flex">
        {text.split('').map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={isHovering ? "hover" : "initial"}
            variants={{
              initial: { y: "0%" },
              hover: { y: "-100%" }
            }}
            transition={isHovering ? hoverTransition(i) : initialTransition(i)}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>

      <span className="absolute top-0 left-0 flex">
        {text.split('').map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={isHovering ? "hover" : "initial"}
            variants={{
              initial: { y: "100%" },
              hover: { y: "0%" }
            }}
            transition={isHovering ? hoverTransition(i) : initialTransition(i)}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>
    </div>
  );
}