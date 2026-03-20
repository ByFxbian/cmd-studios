'use client';

import { useState } from 'react';
import Link, { type LinkProps } from 'next/link';
import { AnimatedStaggeredText } from './AnimatedStaggeredText';

interface AnimatedIconLinkProps extends LinkProps {
  title: string;
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
}

export function AnimatedIconLink({ 
  title, 
  className, 
  textClassName,
  children, 
  ...props 
}: AnimatedIconLinkProps) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-2 ${className || ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatedStaggeredText 
        text={title} 
        isHovering={isHovering}
        className={textClassName}
      />
      
      {children}
    </Link>
  );
}