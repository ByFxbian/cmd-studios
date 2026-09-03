"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const LINKS = [
  { href: "/services", label: "Leistungen" },
  { href: "/portfolio", label: "Arbeiten" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

const listVariants: Variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  closed: { y: 28, opacity: 0, transition: { duration: 0.2 } },
};

export function MobileMenu({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggle();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[190] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#1c1b1a] px-5 py-24 min-[860px]:hidden"
          initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
          exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduceMotion ? 0.12 : 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-accent" />
          <motion.ul
            aria-label="Mobile Navigation"
            className="flex w-full max-w-lg flex-col"
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {LINKS.map((link, index) => (
              <motion.li key={link.href} variants={itemVariants} className="border-b border-white/12">
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={toggle}
                  className="group flex items-center justify-between py-4 text-[clamp(2.4rem,12vw,4.8rem)] leading-none text-white transition-colors hover:text-accent"
                >
                  {link.label}
                  <HiArrowUpRight
                    aria-hidden="true"
                    className="size-5 text-zinc-600 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
