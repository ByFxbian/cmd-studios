"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import { processSteps } from "@/lib/process-data";
import { useLoading } from "@/context/LoadingContext";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useLoading();
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!isLoaded || reduceMotion || !sectionRef.current || !stageRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      gsap.set(cards, { yPercent: (index) => (index === 0 ? 0 : 108), opacity: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: "process-stack",
          trigger: stageRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        const previous = cards[index - 1];
        timeline
          .to(card, { yPercent: 0, duration: 1, ease: "none" })
          .to(previous, { scale: 0.94, opacity: 0.28, duration: 1, ease: "none" }, "<");
      });
    }, sectionRef);

    return () => context.revert();
  }, [isLoaded, reduceMotion]);

  return (
    <section ref={sectionRef} className="relative border-y border-[var(--color-navbar-border)] bg-[var(--color-surface)]">
      <div ref={stageRef} className="hidden h-[100dvh] min-h-[680px] overflow-hidden lg:grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[max(3rem,calc((100vw-90rem)/2+1.5rem))] pr-8 lg:col-span-6">
          <h2 className="max-w-[18ch] text-balance text-[clamp(2.5rem,3.7vw,4.5rem)] leading-[0.94] text-[var(--color-heading)]">Ein Prozess, der Entscheidungen leichter macht.</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[var(--color-text)]">
            Von der ersten Idee bis zum Launch wissen Sie, was als Nächstes passiert und warum.
          </p>
        </div>

        <div className="relative lg:col-span-6">
          {processSteps.map((step) => (
            <article key={step.id} className="process-card absolute inset-0 flex h-full items-center justify-center p-8 xl:p-14">
              <div className="flex min-h-[70%] w-full max-w-3xl flex-col justify-between rounded-[var(--radius-card)] border border-[var(--color-navbar-border)] bg-[var(--color-page-bg)] p-8 shadow-[0_24px_70px_rgb(28_27_26_/_10%)] xl:p-12">
                <div>
                  <h3 className="text-4xl text-[var(--color-heading)] xl:text-6xl">{step.title}</h3>
                  <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--color-text)]">{step.description}</p>
                </div>
                <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--color-navbar-border)] pt-8">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text)]">
                      <HiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="site-container section-space lg:hidden">
        <h2 className="text-balance text-[clamp(2.8rem,10vw,4.5rem)] leading-[0.95] text-[var(--color-heading)]">Ein klarer Prozess.</h2>
        <p className="mt-5 max-w-[52ch] leading-relaxed text-[var(--color-text)]">Von der Idee bis zum Launch bleiben Entscheidungen, Fortschritt und nächste Schritte nachvollziehbar.</p>

        <div className="mt-10 space-y-4">
          {processSteps.map((step) => (
            <article key={step.id} className="rounded-[var(--radius-card)] border border-[var(--color-navbar-border)] bg-[var(--color-page-bg)] p-6 sm:p-8">
              <h3 className="text-3xl text-[var(--color-heading)]">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--color-text)]">{step.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    <HiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
