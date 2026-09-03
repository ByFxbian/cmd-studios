"use client";

import { motion } from "framer-motion";

export function MenuToggle({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  const stroke = isOpen ? "#f9f8f4" : "#1c1b1a";

  return (
    <button
      type="button"
      onClick={toggle}
      className="glass-panel flex h-12 w-12 items-center justify-center rounded-full"
      aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={isOpen}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
        <motion.path
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? { d: "M 5 5 L 19 19" } : { d: "M 4 7 L 20 7" }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? { opacity: 0 } : { opacity: 1, d: "M 4 12 L 20 12" }}
          transition={{ duration: 0.18 }}
        />
        <motion.path
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? { d: "M 19 5 L 5 19" } : { d: "M 4 17 L 20 17" }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </button>
  );
}
