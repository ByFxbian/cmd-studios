"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, type MotionProps } from "framer-motion";
import Link, { type LinkProps } from "next/link";

const MotionLink = motion.create(Link);

type MagneticLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps & Omit<MotionProps, "href">;

export function MagneticLink({ children, className, style, ...props }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 220, mass: 0.45 });
  const springY = useSpring(y, { damping: 18, stiffness: 220, mass: 0.45 });
  const innerX = useSpring(x, { damping: 20, stiffness: 160, mass: 0.5 });
  const innerY = useSpring(y, { damping: 20, stiffness: 160, mass: 0.5 });

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
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
    <MotionLink
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
    </MotionLink>
  );
}
