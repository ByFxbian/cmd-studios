"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { LoaderLogo } from "@/components/ui/LoaderLogo";
import { useEffect, useState } from "react";

const LOADER_DISPLAY_MS = 980;

export function ClientLoader() {
  const { isLoaded, setIsLoaded } = useLoading();
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), reduceMotion ? 80 : LOADER_DISPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [reduceMotion, setIsLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[111] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#1c1b1a]"
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: reduceMotion ? 0.08 : 0.68, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-0 h-2 bg-accent" />
          <LoaderLogo isDesktop={isDesktop} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
