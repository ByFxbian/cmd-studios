'use client';

import { useParams } from 'next/navigation';
import { allProjects } from '@/lib/portfolio-data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowLeft, HiArrowUpRight } from 'react-icons/hi2';
import { ContactSection } from '@/components/sections/ContactSection';
import { AnimatedIconLink } from '@/components/ui/AnimatedIconLink';

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const scrollIndicatorY = useTransform(scrollY, [0, 150], [0, 50]);
  const heroGradientOpacity = useTransform(scrollY, [0, 200], [0.2, 1]);

  if (!slug) {
    return null;
  }

  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return <div className="h-screen pt-40 text-center text-[var(--color-heading)]">Projekt nicht gefunden.</div>;
  }

  const isVideo = project.category === "Video-Produktion";

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-page-bg)] via-[var(--color-page-bg)]/80 to-transparent" 
            style={{ opacity: heroGradientOpacity }}
          />
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden md:block"
          style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-[var(--color-heading)] flex justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-[var(--color-heading)] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      <section className="relative z-10 -mt-20 md:-mt-32">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div 
            className="bg-[var(--color-page-bg)] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl shadow-black/10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-8">
              <div>
                <motion.span 
                  className={`inline-flex items-center justify-center text-[10px] md:text-xs font-accent tracking-[0.2em] uppercase pl-5 pr-4 h-8 md:h-10 rounded-full mb-8 leading-none ${
                    isVideo 
                    ? 'bg-[var(--color-heading)] text-[var(--color-page-bg)]' 
                    : 'bg-accent text-white'
                  }`}
                >
                  <span className="pt-[1px]">{project.category}</span>
                </motion.span>
                <h1 className="text-4xl md:text-8xl font-bold tracking-normal text-[var(--color-heading)] leading-[1.1]">
                  {project.title}
                </h1>
              </div>

              <p className="text-lg md:text-3xl text-[var(--color-text)] max-w-4xl leading-relaxed font-medium">
                {project.description}
              </p>

              {project.liveUrl && (
                <div className="mt-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[var(--color-heading)] text-[var(--color-page-bg)] px-10 py-5 rounded-full font-accent text-lg tracking-wide hover:bg-accent hover:text-white transition-all duration-300 group shadow-xl"
                  >
                    Projekt Live ansehen
                    <HiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 pb-32 bg-[var(--color-page-bg)]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {project.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 + i * 0.15, ease: "easeOut" }}
              >
                <span className="font-accent text-sm tracking-wider uppercase text-accent">
                  {section.heading}
                </span>
                <p className="mt-3 text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <motion.div
              className="mt-16 pt-10 border-t border-[var(--color-navbar-border)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
            >
              <span className="font-accent text-sm tracking-wider uppercase text-accent">
                Tech-Stack
              </span>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--color-scroll-button-bg)] text-[var(--color-heading)] font-heading text-sm px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <AnimatedIconLink 
              href="/portfolio" 
              title="Zurück zur Übersicht"
              className="text-accent font-semibold"
            >
              <HiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </AnimatedIconLink>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}