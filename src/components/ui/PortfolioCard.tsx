'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

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

  return (
    <motion.div
      variants={cardVariant}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-white border border-zinc-200 shadow-lg">
          {/* Bild-Container */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Vorschaubild für das Projekt ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          
          {/* Text-Container */}
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
        </div>
      </Link>
    </motion.div>
  );
}