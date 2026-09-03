"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { MagneticLink } from "../ui/MagneticLink";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
];

const containerVariants: Variants = {
  idle: {
    width: 168,
    height: 52,
    borderRadius: 9999,
    transition: { type: "spring", stiffness: 240, damping: 26 },
  },
  expanded: {
    width: 620,
    height: 60,
    borderRadius: 9999,
    transition: { type: "spring", stiffness: 220, damping: 25 },
  },
  hidden: {
    y: "-155%",
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    setIsHidden(latest > 180 && diff > 0);
    setIsScrolled(latest > 56);
    lastScrollY.current = latest;
  });

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const expanded = !isScrolled || isHovered;
  const motionState = reduceMotion
    ? ["visible", expanded ? "expanded" : "idle"]
    : [isHidden && !isHovered ? "hidden" : "visible", expanded ? "expanded" : "idle"];

  return (
    <>
      <motion.header
        aria-label="Hauptnavigation"
        className="glass-panel fixed left-1/2 top-5 z-[100] hidden -translate-x-1/2 items-center justify-center overflow-hidden shadow-[0_18px_60px_rgb(28_27_26_/_14%)] min-[860px]:flex"
        initial={false}
        animate={motionState}
        variants={containerVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="flex h-full w-full items-center justify-between gap-2 whitespace-nowrap px-2">
          <div className="shrink-0 pl-4 pr-2">
            <Link
              href="/"
              aria-label="CMD Studios Startseite"
              className="flex items-center text-xl font-bold tracking-normal text-[var(--color-heading)] md:text-2xl"
            >
              CMD
              <span
                className={`overflow-hidden font-normal text-[var(--color-text-muted)] transition-[max-width,opacity] duration-300 ${
                  expanded ? "ml-1 max-w-24 opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                Studios
              </span>
            </Link>
          </div>

          <div className="flex flex-1 justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  className="flex items-center gap-1"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {NAV_ITEMS.map((item) => {
                    const active = pathname === item.path || pathname.startsWith(`${item.path}/`);
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        aria-current={active ? "page" : undefined}
                        className="relative rounded-full px-4 py-2 text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-heading)] md:text-base"
                      >
                        <span className="relative z-10">{item.name}</span>
                        {active ? (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 rounded-full bg-[var(--color-surface-strong)]"
                            transition={{ type: "spring", stiffness: 320, damping: 30 }}
                          />
                        ) : null}
                      </Link>
                    );
                  })}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="shrink-0 pr-1">
            <MagneticLink
              href="/contact"
              aria-label="Kontakt"
              className={`flex items-center justify-center rounded-full bg-[var(--color-heading)] font-medium text-[var(--color-page-bg)] transition-[width,padding,transform,background-color] duration-300 active:scale-[0.98] ${
                expanded
                  ? "h-11 px-6 text-sm md:text-base"
                  : "h-10 w-10 p-0"
              }`}
            >
              {expanded ? "Kontakt" : <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />}
            </MagneticLink>
          </div>
        </nav>
      </motion.header>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-[201] flex items-center justify-between px-4 py-4 min-[860px]:hidden">
        <Link
          href="/"
          aria-label="CMD Studios Startseite"
          className={`pointer-events-auto relative z-[202] text-xl font-bold tracking-normal transition-colors ${
            isOpen ? "text-white" : "text-accent"
          }`}
        >
          CMD <span className={`font-normal ${isOpen ? "text-white" : "text-[var(--color-heading)]"}`}>Studios</span>
        </Link>

        <div className="pointer-events-auto relative z-[202]">
          <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} toggle={closeMenu} />
    </>
  );
}
