"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";

export function ContactSuccessAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex min-h-[26rem] flex-col items-start justify-center"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white"
        initial={reduceMotion ? false : { scale: 0.7, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <HiCheck aria-hidden="true" className="h-8 w-8" />
      </motion.div>
      <h3 className="mt-7 text-4xl text-[var(--color-heading)] md:text-6xl">Nachricht gesendet.</h3>
      <p className="mt-3 text-lg text-[var(--color-text)] md:text-xl">Wir melden uns in Kürze bei Ihnen.</p>
    </motion.div>
  );
}
