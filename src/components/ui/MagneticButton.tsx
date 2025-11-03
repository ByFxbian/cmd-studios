'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type MotionProps } from 'framer-motion';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MagneticButton({ 
  children, 
  className, 
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  return (
    <motion.button
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
    </motion.button>
  );
}