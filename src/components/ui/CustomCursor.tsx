"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CURSOR_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(CURSOR_QUERY);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!enabled || !cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    const setX = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power3.out" });
    const setY = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power3.out" });

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const formControl = target?.closest("input, textarea, select, [contenteditable='true']");
      const interactive = target?.closest("a, button, summary, [role='button'], [data-cursor='interactive']");

      setX(event.clientX);
      setY(event.clientY);
      gsap.to(cursor, {
        opacity: formControl ? 0 : 1,
        scale: interactive ? 1.7 : 1,
        backgroundColor: interactive ? "#ff4d00" : "transparent",
        borderColor: interactive ? "transparent" : "#ff4d00",
        duration: 0.22,
        overwrite: "auto",
      });
    };

    const handlePointerLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.15 });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      gsap.killTweensOf(cursor);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full border-2 border-accent"
    />
  );
}
