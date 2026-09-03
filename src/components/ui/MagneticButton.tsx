"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, type MotionProps } from "framer-motion";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MagneticButton({ children, className, style, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 220, mass: 0.45 });
  const springY = useSpring(y, { damping: 18, stiffness: 220, mass: 0.45 });
  const innerX = useSpring(x, { damping: 20, stiffness: 160, mass: 0.5 });
  const innerY = useSpring(y, { damping: 20, stiffness: 160, mass: 0.5 });

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.09);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.09);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      {...props}
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      style={{ ...style, x: reduceMotion ? 0 : springX, y: reduceMotion ? 0 : springY }}
      className={className}
    >
      <motion.span
        style={{
          x: reduceMotion ? 0 : innerX,
          y: reduceMotion ? 0 : innerY,
          display: "inherit",
          alignItems: "inherit",
          justifyContent: "inherit",
          gap: "inherit",
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
