'use client';

import Link from "next/link";
import { MagneticLink } from "../ui/MagneticLink";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative min-h-[50vh] md:h-[100dvh] md:min-h-[800px] w-full bg-zinc-950 text-zinc-200 overflow-hidden flex flex-col justify-between px-6 py-12 sticky bottom-0 z-0">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12 pt-20">
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Lust auf ein Projekt?</h3>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Sie haben eine Idee, ein konkretes Vorhaben oder einfach das Gefühl, dass ihr Auftritt besser sein könnte? Dann schreiben Sie uns.
          </p>
          <MagneticLink 
            href="/contact"
            className="inline-block text-xl md:text-2xl font-bold text-white underline decoration-zinc-600 underline-offset-8 hover:decoration-accent hover:text-accent transition-all"
          >
            hallo@cmdstudios.at
          </MagneticLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm uppercase tracking-wider text-zinc-500 mt-12 md:mt-0">
          <div className="flex flex-col gap-4 text-base tracking-wide capitalize">
            <span className="text-white font-bold uppercase tracking-wider text-sm mb-2">Navigation</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Arbeiten</Link>
            <Link href="/services" className="hover:text-white transition-colors">Leistungen</Link>
            <Link href="/about" className="hover:text-white transition-colors">Über uns</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link>
          </div>
          <div className="flex flex-col gap-4 text-base tracking-wide capitalize">
            <span className="text-white font-bold uppercase tracking-wider text-sm mb-2">Rechtliches</span>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="#" className="hover:text-white transition-colors">AGB</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold uppercase tracking-wider text-sm mb-2">Socials</span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 text-base tracking-wide capitalize"><FaInstagram aria-hidden="true" /> Instagram</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 text-base tracking-wide capitalize"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 text-base tracking-wide capitalize"><FaGithub aria-hidden="true" /> GitHub</a>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-auto pt-24">
        <motion.h1 
          aria-hidden="true"
          className="text-[12vw] leading-[0.8] font-bold text-center text-zinc-900 select-none whitespace-nowrap"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CMD STUDIOS
        </motion.h1>
      </div>

      <div className="absolute bottom-4 left-0 w-full text-center text-sm text-zinc-600 uppercase tracking-widest">
        &copy; {currentYear} CMD Studios. All rights reserved.
      </div>
    </footer>
  );
}
