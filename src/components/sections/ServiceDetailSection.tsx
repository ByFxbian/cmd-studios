'use client';

import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import type { IconType } from 'react-icons';

type ServiceItem = {
  name: string;
  description: string;
  icon: IconType;
};

type ServiceDetailProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  services: ServiceItem[];
  icon: IconType;
  imageSide: 'left' | 'right';
  isDark?: boolean;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ServiceDetailSection({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  services,
  icon: TitleIcon,
  imageSide,
  isDark = false,
}: ServiceDetailProps) {
  
  const textColor = isDark ? 'text-zinc-300' : 'text-[var(--color-text)]';
  const headingColor = isDark ? 'text-white' : 'text-[var(--color-heading)]';
  const bgColor = isDark ? 'bg-zinc-900' : 'bg-white';
  const cardBg = isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-200';

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        if(imageInnerRef.current && sectionRef.current) {
            gsap.fromTo(
                imageInnerRef.current,
                {
                    yPercent: -10
                },
                {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top",
                    },
                }
            );
        }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textContent = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
        <TitleIcon className="w-8 h-8 text-accent" />
        <span className="text-2xl font-bold text-accent">{title}</span>
      </motion.div>
      <motion.h2 
        className={`text-4xl md:text-5xl font-bold tracking-tighter ${headingColor} mb-6`}
        variants={itemVariants}
      >
        {subtitle}
      </motion.h2>
      <motion.p 
        className={`text-lg ${textColor} mb-10`}
        variants={itemVariants}
      >
        {description}
      </motion.p>
      
      <motion.div className="space-y-4" variants={itemVariants}>
        {services.map((service) => (
          <div 
            key={service.name} 
            className={`flex items-start gap-4 p-4 rounded-lg border ${cardBg}`}
          >
            <service.icon className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div>
              <h4 className={`font-semibold ${headingColor}`}>{service.name}</h4>
              <p className={`text-sm ${textColor}`}>{service.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  const imageContent = (
    <motion.div
        className="relative w-full h-[300px] md:h-[500px] lg:h-full rounded-lg overflow-hidden shadow-2xl"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <div 
            ref={imageInnerRef} 
            className="relative w-full h-[120%] top-[-10%]" 
        >
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
    </motion.div>
  );

  return (
    <section 
        ref={sectionRef} 
        id={id} 
        className={`w-full py-20 md:py-32 ${bgColor}`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[70vh] items-center">
          {imageSide === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}