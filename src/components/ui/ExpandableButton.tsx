'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { featuredProjects } from '@/lib/portfolio-data';
import { HiArrowRight } from 'react-icons/hi';

export function ExpandableButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-14 rounded-full bg-[var(--color-heading)] text-[var(--color-page-bg)] flex items-center overflow-hidden cursor-pointer group border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300"
      style={{ borderRadius: "9999px" }} 
    >
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />

      <Link href="/portfolio" className="flex items-center h-full px-6 z-10 w-full relative">
        
        <motion.div 
            layout="position" 
            className="flex items-center gap-3 flex-shrink-0"
        >
            <span className="font-bold text-lg md:text-xl text-[var(--color-page-bg)] tracking-wide">
                Portfolio
            </span>
            <motion.div
                animate={{ rotate: isHovered ? -45 : 0, x: isHovered ? 2 : 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 rounded-full p-1"
            >
                <HiArrowRight className="w-4 h-4 text-[var(--color-page-bg)]" />
            </motion.div>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ 
                opacity: isHovered ? 1 : 0, 
                width: isHovered ? "auto" : 0,
                marginLeft: isHovered ? 24 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center overflow-hidden h-full"
        >
            <div className="flex pl-2 py-1"> 
                {featuredProjects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ scale: 0, x: -10, opacity: 0 }}
                        animate={{ scale: isHovered ? 1 : 0, x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: isHovered ? i * 0.08 : 0 }}
                        className="relative w-10 h-10 rounded-full border-2 border-[var(--color-heading)] overflow-hidden flex-shrink-0 -ml-3 first:ml-0"
                    >
                        <Image 
                            src={project.imageUrl} 
                            alt={project.title} 
                            fill 
                            sizes="40px"
                            className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
            
            <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="whitespace-nowrap text-base font-medium text-[var(--color-text-muted)] pl-4 pr-2 hidden sm:inline-block"
            >
                Latest Work
            </motion.span>

        </motion.div>

      </Link>
    </motion.div>
  );
}
