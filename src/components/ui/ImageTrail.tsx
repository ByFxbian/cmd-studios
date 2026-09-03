"use client";

import { allProjects } from "@/lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { type RefObject, useCallback, useEffect, useRef, useState } from "react";

type TrailItem = {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
};

const TRAIL_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function ImageTrail({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const [enabled, setEnabled] = useState(false);
  const [items, setItems] = useState<TrailItem[]>([]);
  const layerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const nextImage = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const media = window.matchMedia(TRAIL_QUERY);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const spawn = useCallback((event: PointerEvent) => {
    const layer = layerRef.current;
    if (!layer || event.timeStamp - lastSpawn.current < 260) return;

    lastSpawn.current = event.timeStamp;
    const rect = layer.getBoundingClientRect();
    const project = allProjects[nextImage.current % allProjects.length];
    const id = ++nextId.current;
    nextImage.current += 1;

    setItems((current) => [
      ...current.slice(-3),
      {
        id,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        src: project.imageUrl,
        rotation: ((id % 5) - 2) * 3,
      },
    ]);

    window.setTimeout(() => {
      setItems((current) => current.filter((item) => item.id !== id));
    }, 1050);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!enabled || !container) return;
    container.addEventListener("pointermove", spawn, { passive: true });
    return () => container.removeEventListener("pointermove", spawn);
  }, [containerRef, enabled, spawn]);

  if (!enabled) return null;

  return (
    <div ref={layerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="absolute left-0 top-0"
            style={{ x: item.x, y: item.y, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.72, rotate: item.rotation }}
            animate={{ opacity: 0.72, scale: 1 }}
            exit={{ opacity: 0, scale: 0.82 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] w-40 overflow-hidden rounded-[var(--radius-control)] shadow-[0_18px_50px_rgb(28_27_26_/_24%)]">
              <Image src={item.src} alt="" fill sizes="160px" className="object-cover" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
