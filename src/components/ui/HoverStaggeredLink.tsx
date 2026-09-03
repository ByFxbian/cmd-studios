'use client';

import { useState } from 'react';
import Link, { type LinkProps } from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedStaggeredText } from './AnimatedStaggeredText';

interface HoverStaggeredLinkProps extends LinkProps {
  title: string;
  className?: string;
}

export function HoverStaggeredLink({ title, className, ...props }: HoverStaggeredLinkProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      {...props}
      className={`relative inline-block py-2 ${className || ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatedStaggeredText text={title} isHovering={isHovering} />
      
      <motion.span
        className="absolute left-0 bottom-0 h-[1px] w-full bg-accent"
        animate={isHovering ? "hover" : "initial"}
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ originX: 0.5 }}
      />
    </Link>
  );
}
