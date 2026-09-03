"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

type PortfolioCardProps = {
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion";
  imageUrl: string;
  href: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function PortfolioCard({
  title,
  category,
  imageUrl,
  href,
  className = "",
  imageClassName = "aspect-[4/3]",
  sizes = "(max-width: 767px) 100vw, 50vw",
  priority = false,
}: PortfolioCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 115, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 115, damping: 18 });
  const imageX = useTransform(springX, [-1, 1], ["-1.6%", "1.6%"]);
  const imageY = useTransform(springY, [-1, 1], ["-1.6%", "1.6%"]);

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    pointerY.set((event.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <article className={className}>
      <Link
        ref={ref}
        href={href}
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
        className="group block"
      >
        <div className={`relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] ${imageClassName}`}>
          <motion.div
            className="absolute -inset-[2%]"
            style={{ x: reduceMotion ? 0 : imageX, y: reduceMotion ? 0 : imageY }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex items-start justify-between gap-5 pt-4">
          <div>
            <h3 className="text-xl leading-tight text-[var(--color-heading)] sm:text-2xl">{title}</h3>
            <p className="mt-1 font-accent text-sm text-accent">{category}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-navbar-border)] text-[var(--color-heading)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <HiArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
