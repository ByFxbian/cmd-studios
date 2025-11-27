'use client';

import { MagneticLink } from '@/components/ui/MagneticLink';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-zinc-950 flex flex-col items-center justify-center text-center overflow-hidden relative">
      
      {/* Background Noise/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50" />
      
      <div className="relative z-10 px-6">
        <motion.h1 
          className="text-[15vw] leading-none font-bold text-white mix-blend-difference select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-lg mx-auto">
            Ups. Du bist im digitalen Nirvana gelandet. Diese Seite existiert nicht (mehr).
          </p>

          <MagneticLink
            href="/"
            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Zurück zur Homebase
          </MagneticLink>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-zinc-800 rounded-full opacity-20 pointer-events-none animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-zinc-800 rounded-full opacity-20 pointer-events-none animate-[spin_15s_linear_infinite_reverse]" />
    </div>
  );
}