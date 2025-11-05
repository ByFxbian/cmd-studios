'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';

type PortfolioCardProps = {
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion";
  imageUrl: string;
  href: string;
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function PortfolioCard({ title, category, imageUrl, href }: PortfolioCardProps) {  
  const isVideo = category === "Video-Produktion";

  const ref = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 15};
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const translateX = useTransform(springX, [-0.5, 0.5], ['-2.5%', '2.5%']);
  const translateY = useTransform(springY, [-0.5, 0.5], ['-2.5%', '2.5%']);

  const spotlightX = useMotionValue("50%");
  const spotlightY = useMotionValue("50%");

  const handleMouseMove = (e:React.MouseEvent<HTMLAnchorElement>) => {
    if(!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  
    spotlightX.set(`${((e.clientX - rect.left) / rect.width) * 100}%`)
    spotlightY.set(`${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="flex flex-col"
      initial="initial"
      whileHover="hover"
    >
      <Link ref={ref} href={href} className="group relative block rounded-lg overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <motion.div 
            className="absolute inset-0"
            style={{
              x: translateX, // Wendet Parallax an
              y: translateY,
              scale: 1.15, // Startet leicht eingezoomt, damit Ränder nie sichtbar werden
            }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{
              // 8. Wir animieren die CSS-Variablen für 'background'
              '--x': spotlightX,
              '--y': spotlightY,
              background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.5) 70%)',
            } as React.CSSProperties}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          />
      </div>
        {/*<div className="relative overflow-hidden rounded-lg bg-white border border-zinc-200 shadow-lg">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Vorschaubild für das Projekt ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          
          <div className="p-5">
            <span 
              className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2 ${
                isVideo 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-accent-light/30 text-accent-dark'
              }`}
            >
              {category}
            </span>
            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
        </div>*/}
      </Link>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-[var(--color-heading)]">{title}</h3>
        <span 
              className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2 ${
                isVideo 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-accent-light/30 text-accent-dark'
              }`}
            >
              {category}
            </span>
      </div>
    </motion.div>
  );
}