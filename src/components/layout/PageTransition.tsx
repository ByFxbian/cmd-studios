"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const accentControls = useAnimationControls();
  const darkControls = useAnimationControls();
  const isTransitioning = useRef(false);
  const previousPointerEvents = useRef("");

  const openCurtain = useCallback(async () => {
    accentControls.set({ originY: 0 });
    darkControls.set({ originY: 0 });

    await Promise.all([
      darkControls.start({
        scaleY: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.44, ease: [0.76, 0, 0.24, 1] },
      }),
      accentControls.start({
        scaleY: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.06, ease: [0.76, 0, 0.24, 1] },
      }),
    ]);

    document.body.style.pointerEvents = previousPointerEvents.current;
    isTransitioning.current = false;
  }, [accentControls, darkControls, reduceMotion]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (!isTransitioning.current) return;

    const frame = window.requestAnimationFrame(() => {
      void openCurtain();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openCurtain, pathname]);

  useEffect(() => {
    if (reduceMotion) return;

    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.hasAttribute("download") || anchor.dataset.noTransition !== undefined) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

      event.preventDefault();
      if (isTransitioning.current) return;

      isTransitioning.current = true;
      previousPointerEvents.current = document.body.style.pointerEvents;
      document.body.style.pointerEvents = "none";

      accentControls.set({ originY: 1 });
      darkControls.set({ originY: 1 });

      void Promise.all([
        accentControls.start({
          scaleY: 1,
          transition: { duration: 0.44, ease: [0.76, 0, 0.24, 1] },
        }),
        darkControls.start({
          scaleY: 1,
          transition: { duration: 0.5, delay: 0.06, ease: [0.76, 0, 0.24, 1] },
        }),
      ]).then(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      });
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      document.body.style.pointerEvents = previousPointerEvents.current;
    };
  }, [accentControls, darkControls, reduceMotion, router]);

  return (
    <>
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[109] origin-top bg-accent"
        initial={{ scaleY: 0 }}
        animate={accentControls}
      >
        <motion.div
          className="absolute inset-0 origin-top bg-[#1c1b1a]"
          initial={{ scaleY: 0 }}
          animate={darkControls}
        />
      </motion.div>
    </>
  );
}
