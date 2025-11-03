'use client';

import { motion } from 'framer-motion';

export function ContactSuccessAnimation() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Wrapper für die "Wegflieg"-Animation */}
      <motion.div
        className="relative"
        initial="visible"
        animate="fly"
        variants={{
          visible: { y: 0, rotateZ: 0, opacity: 1 },
          fly: { 
            y: -200, 
            rotateZ: 15, 
            opacity: 0, 
            transition: { delay: 1.5, duration: 0.7, ease: 'easeIn' } 
          }
        }}
      >
        {/* Der Umschlag selbst */}
        <motion.div
          className="relative w-40 h-32"
          initial="start"
          animate="end"
          variants={{
            start: {},
            end: { transition: { staggerChildren: 0.3 } }
          }}
        >
          {/* 1. Das "Papier" (die Nachricht) */}
          <motion.div
            className="absolute top-4 left-8 w-24 h-20 bg-white shadow-md rounded border border-zinc-200 p-2 z-10"
            variants={{
              start: { y: 0, scale: 1, opacity: 1 },
              end: { 
                y: 20, 
                scale: 0.8, 
                opacity: 0.8, 
                transition: { duration: 0.5, ease: 'easeOut' } 
              }
            }}
          >
            {/* Fake-Textzeilen */}
            <div className="w-full h-1 bg-zinc-300 rounded-full mb-1.5"></div>
            <div className="w-full h-1 bg-zinc-300 rounded-full mb-1.5"></div>
            <div className="w-2/3 h-1 bg-zinc-300 rounded-full"></div>
          </motion.div>
          
          {/* 2. Umschlag-Rückseite (erscheint) */}
          <motion.div
            className="absolute bottom-0 left-0 w-40 h-24 bg-accent-dark rounded z-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
          />
          
          {/* 3. Umschlag-Klappe (schließt sich) */}
          <motion.div
            className="absolute top-8 left-0 w-40 h-12 bg-accent z-30"
            style={{ originY: 'bottom', perspective: 1000 }}
            variants={{
              start: { rotateX: 0 }, // Offen
              end: { rotateX: 180, transition: { delay: 0.8, duration: 0.5 } } // Geschlossen
            }}
          />
        </motion.div>
      </motion.div>

      {/* Erfolgs-Text (erscheint, nachdem der Brief wegfliegt) */}
      <motion.h3
        className="text-2xl font-bold text-[var(--color-heading)] mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.8 } }}
      >
        Nachricht gesendet!
      </motion.h3>
      <motion.p
        className="text-lg text-[var(--color-text)]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.9 } }}
      >
        Wir melden uns in Kürze bei dir.
      </motion.p>
    </motion.div>
  );
}