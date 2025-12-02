'use client';

import { useParams } from 'next/navigation';
import { allProjects } from '@/lib/portfolio-data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import { ContactSection } from '@/components/sections/ContactSection';
import { useEffect, useState } from 'react';

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug;

  if (!slug) {
    return null;
  }

  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return <div className="h-screen pt-40 text-center">Projekt nicht gefunden.</div>;
  }

  
  const isVideo = project.category === "Video-Produktion";

  return (
    <>
      <section className="relative w-full h-[70vh] min-h-[500px]">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex flex-col justify-end z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto max-w-5xl px-6 pb-12 md:pb-24">
            <span 
              className={`inline-block text-sm font-semibold px-2 py-0.5 rounded mb-3 ${
                isVideo 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-accent-light/30 text-accent-dark'
              }`}
            >
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-normal text-white">
              {project.title}
            </h1>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <div 
              className="prose prose-lg lg:prose-xl prose-zinc 
                         prose-h3:font-bold prose-h3:text-accent 
                         prose-li:marker:text-accent"
              dangerouslySetInnerHTML={{ __html: project.content }} 
            />

            <Link 
              href="/portfolio" 
              className="group inline-flex items-center gap-2 text-accent font-semibold mt-16"
            >
              <HiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Zurück zur Übersicht
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}