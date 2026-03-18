'use client';

import { motion, useScroll, useTransform, useSpring, type MotionValue, AnimatePresence } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiGreensock, SiNodedotjs, SiFigma, 
  SiAdobepremierepro, SiMysql, SiMongodb, SiAdobephotoshop,
  SiAdobelightroom, SiHtml5, SiCss3, SiJavascript, SiGit,
  SiFlutter, SiDart, SiSwift, SiAdobeaftereffects, SiAdobeindesign,
  SiAdobeillustrator
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaJava, FaCamera } from 'react-icons/fa';
import { HiOutlineArrowsExpand, HiX } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import { useRef, useState, useEffect, useId } from 'react';

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React Three Fiber", icon: SiReact, color: "#61DAFB" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999FF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Lightroom", icon: SiAdobelightroom, color: "#31A8FF" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
  { name: "Camera Raw", icon: FaCamera, color: "#999999" }, 
  { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
  { name: "InDesign", icon: SiAdobeindesign, color: "#FF3366" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
];

const col1 = techStack.slice(0, 8);
const col2 = techStack.slice(8, 16);
const col3 = techStack.slice(16, 25);

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const dialogTitleId = useId();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    const activeElement = document.activeElement;
    lastFocusedElementRef.current = activeElement instanceof HTMLElement ? activeElement : null;
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      lastFocusedElementRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [-200, 0]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -150]);

  return (
    <>
      <section ref={containerRef} className="w-full py-32 bg-zinc-950 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-40 pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/3 text-center md:text-left">
                  <h2 className="text-6xl md:text-8xl text-white mb-6 tracking-tight leading-[0.9]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-600">
                           Unser Tech Stack.
                      </span>
                  </h2>
                  <p className="text-zinc-400 text-xl md:text-3xl mb-8">
                    Die Tools hinter unseren Projekten. Modern, erprobt und so gewählt, dass Design, Performance und Skalierbarkeit zusammenpassen.
                  </p>
                  
                  <div className="flex justify-center md:justify-start">
                    <button
                        ref={openButtonRef}
                        type="button"
                        onClick={openModal}
                        className="group flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-white 
                                   hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 shadow-xl cursor-none"
                        aria-label="Alle Technologien anzeigen"
                    >
                        <HiOutlineArrowsExpand aria-hidden="true" className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>
              </div>

              <div className="w-full md:w-2/3 h-[500px] md:h-[600px] relative flex justify-center gap-4 md:gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                  <Column items={col1} y={y1} />
                  <Column items={col2} y={y2} className="mt-[-100px]" />
                  <Column items={col3} y={y3} className="hidden md:flex" />
              </div>
          </div>
      </section>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <AnimatePresence mode="wait">
          {isOpen && (
              <motion.div 
                  className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                  <button
                      type="button"
                      className="absolute inset-0 bg-black/95"
                      onClick={closeModal}
                      aria-label="Tech-Stack-Dialog schließen"
                  />

                  <motion.div 
                      ref={dialogRef}
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby={dialogTitleId}
                      className="relative w-full max-w-6xl max-h-[85vh] overflow-y-auto overscroll-contain bg-zinc-900 border border-zinc-700/50 rounded-3xl p-6 md:p-12 shadow-2xl custom-scrollbar pointer-events-auto"
                      data-lenis-prevent
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  >
                      <div className="flex justify-between items-center mb-8 sticky -top-6 md:-top-12 bg-zinc-900 z-50 py-4 border-b border-zinc-800/50">
                          <h3 id={dialogTitleId} className="text-3xl md:text-4xl text-white">Unser Stack</h3>
                          <button 
                              ref={closeButtonRef}
                              type="button"
                              onClick={closeModal}
                              className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-none"
                              aria-label="Tech-Stack-Dialog schließen"
                          >
                              <HiX aria-hidden="true" className="w-6 h-6" />
                          </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-4">
                          {techStack.map((tech, i) => (
                              <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.02 }}
                                  className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800 
                                             hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 group cursor-none"
                              >
                                   <div 
                                       className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-950 transition-colors"
                                       style={{ color: tech.color }}
                                   >
                                       <tech.icon aria-hidden="true" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
                                   </div>
                                   <span className="text-sm md:text-xl tracking-wide font-medium text-zinc-400 group-hover:text-white text-center">
                                       {tech.name}
                                  </span>
                              </motion.div>
                          ))}
                      </div>
                  </motion.div>
              </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

function Column({ items, y, className = "" }: { items: typeof techStack, y: MotionValue<number>, className?: string }) {
    return (
        <motion.div 
            style={{ y }}
            className={`flex flex-col gap-4 md:gap-6 min-w-[120px] md:min-w-[160px] ${className} will-change-transform`}
        >
            {items.map((tech, i) => (
                <div 
                    key={i} 
                    className="group relative flex flex-col items-center justify-center gap-3 p-4 md:p-6 
                               bg-zinc-900/60 border border-zinc-800/50 rounded-2xl
                               hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 cursor-none"
                >
                    <div 
                        className="p-2 md:p-3 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors"
                        style={{ color: tech.color }}
                    >
                        <tech.icon aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>
            ))}
        </motion.div>
    )
}
