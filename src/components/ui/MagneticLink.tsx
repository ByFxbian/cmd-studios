/* eslint-disable react-hooks/static-components */
'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type MotionProps } from 'framer-motion';
import Link, { type LinkProps } from 'next/link';

type MagneticLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps & Omit<MotionProps, 'href'>;

export function MagneticLink({ children, className, ...props }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    
    x.set(relX * 0.1);
    y.set(relY * 0.1);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionLink = motion(Link);

  return (
    <MotionLink
      {...props}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={className} 
      transition={{ duration: 0.1 }}
    >
      <motion.span
        style={{
          x: useSpring(x, { ...springConfig, stiffness: 150 }),
          y: useSpring(y, { ...springConfig, stiffness: 150 }),
          display: 'inherit',
          alignItems: 'inherit',
          justifyContent: 'inherit',
          gap: 'inherit',
        }}
      >
        {children}
      </motion.span>
    </MotionLink>
  );
}