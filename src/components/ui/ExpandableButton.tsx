"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { featuredProjects } from "@/lib/portfolio-data";

export function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={!reduceMotion}
      onPointerEnter={(event) => event.pointerType !== "touch" && setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      onFocusCapture={() => setExpanded(true)}
      onBlurCapture={() => setExpanded(false)}
      className="relative flex h-14 items-center overflow-hidden rounded-full border border-white/10 bg-[var(--color-heading)] text-[var(--color-page-bg)] shadow-[0_14px_32px_rgb(28_27_26_/_18%)]"
      transition={{ layout: { type: "spring", stiffness: 230, damping: 27 } }}
    >
      <Link href="/portfolio" className="flex h-full items-center px-6">
        <span className="flex shrink-0 items-center gap-3 font-accent text-lg">
          Portfolio
          <motion.span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-white/10"
            animate={{ rotate: expanded && !reduceMotion ? -38 : 0 }}
          >
            <HiArrowRight className="h-4 w-4" />
          </motion.span>
        </span>

        <motion.span
          aria-hidden="true"
          className="hidden items-center overflow-hidden sm:flex"
          initial={false}
          animate={{
            width: expanded ? 116 : 0,
            marginLeft: expanded ? 18 : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          {featuredProjects.map((project, index) => (
            <span
              key={project.id}
              className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-heading)]"
              style={{ marginLeft: index === 0 ? 0 : -8 }}
            >
              <Image src={project.imageUrl} alt="" fill sizes="36px" className="object-cover" />
            </span>
          ))}
        </motion.span>
      </Link>
    </motion.div>
  );
}
