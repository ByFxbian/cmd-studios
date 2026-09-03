"use client";

import { type FormEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiOutlineArrowRight } from "react-icons/hi2";
import { packages } from "@/lib/package-data";
import { useLoading } from "@/context/LoadingContext";
import { ContactSuccessAnimation } from "../ui/ContactSuccessAnimation";
import { MagneticButton } from "../ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TOTAL_PANELS = 3;
type Status = "idle" | "submitting" | "success" | "error";

export function ContactHorizontalScroll({ initialPackage }: { initialPackage?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const activePanelRef = useRef(0);
  const [activePanel, setActivePanel] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [horizontal, setHorizontal] = useState(false);
  const reduceMotion = useReducedMotion();
  const { isLoaded } = useLoading();

  const packageTitles = packages.map((pkg) => pkg.title);
  const selectedPackage = initialPackage && packageTitles.includes(initialPackage)
    ? initialPackage
    : "Kein bestimmtes Paket";

  const goToIndex = useCallback((index: number) => {
    const trigger = scrollTriggerRef.current;
    if (!trigger) return;
    const target = Math.max(0, Math.min(TOTAL_PANELS - 1, index));
    const scrollPosition = trigger.start + (trigger.end - trigger.start) * (target / (TOTAL_PANELS - 1));

    gsap.to(window, {
      scrollTo: { y: scrollPosition, autoKill: false },
      duration: 0.55,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setHorizontal(media.matches && !reduceMotion);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduceMotion]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const darkPanel = darkPanelRef.current;
    if (!isLoaded || !horizontal || !section || !track || !darkPanel) return;

    document.documentElement.classList.add("hide-global-scrollbar");

    const context = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const setDarkOpacity = gsap.quickSetter(darkPanel, "opacity");
      setDarkOpacity(0.72);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          id: "contact-scroll",
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (TOTAL_PANELS - 1),
            duration: { min: 0.22, max: 0.5 },
            delay: 0.08,
            ease: "power2.inOut",
            inertia: false,
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextPanel = Math.round(self.progress * (TOTAL_PANELS - 1));
            if (nextPanel !== activePanelRef.current) {
              activePanelRef.current = nextPanel;
              setActivePanel(nextPanel);
            }

            const darkProgress = gsap.utils.clamp(0, 1, (self.progress - 0.5) * 2);
            setDarkOpacity(0.72 + darkProgress * 0.28);
          },
          onRefresh: (self) => {
            scrollTriggerRef.current = self;
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger ?? null;
      ScrollTrigger.refresh();

      if (initialPackage) {
        window.requestAnimationFrame(() => goToIndex(1));
      }
    }, sectionRef);

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(section);

    return () => {
      resizeObserver.disconnect();
      scrollTriggerRef.current = null;
      context.revert();
      gsap.set(darkPanel, { clearProps: "opacity" });
      document.documentElement.classList.remove("hide-global-scrollbar");
    };
  }, [goToIndex, horizontal, initialPackage, isLoaded]);

  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", { method: "POST", body: new FormData(event.currentTarget) });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error || "Etwas ist schiefgelaufen.");
      setStatus("success");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Etwas ist schiefgelaufen.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  const statusAnnouncement = status === "submitting"
    ? "Anfrage wird gesendet."
    : status === "success"
      ? "Anfrage erfolgreich gesendet."
      : status === "error"
        ? `Fehler beim Senden: ${errorMessage}`
        : "";

  return (
    <section ref={sectionRef} className="contact-experience overflow-hidden bg-[var(--color-page-bg)]">
      <div ref={trackRef} className="contact-track flex w-full flex-col lg:w-[300vw] lg:flex-row">
        <section className="contact-panel flex min-h-[100dvh] w-full items-end bg-[var(--color-surface)] px-4 pb-12 pt-28 sm:px-6 md:pb-16 lg:h-[100dvh] lg:w-screen lg:items-center lg:py-24">
          <div className="site-container">
            <h1 className="max-w-[12ch] text-balance text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.86] text-[var(--color-heading)]">
              Bereit, etwas Neues zu starten?
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-[var(--color-text)] md:text-2xl">
              Erzählen Sie uns von Ihrem Projekt. Wir melden uns mit einer klaren Einschätzung zurück.
            </p>
          </div>
        </section>

        <section className="contact-panel flex min-h-[100dvh] w-full items-center bg-[var(--color-page-bg)] px-4 py-24 sm:px-6 lg:h-[100dvh] lg:w-screen lg:overflow-y-auto">
          <div className="mx-auto w-full max-w-5xl">
            <p className="sr-only" aria-live="polite">{statusAnnouncement}</p>
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.div
                  key="form"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                >
                  <div className="mb-7 md:mb-9">
                    <h2 className="text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.95] text-[var(--color-heading)]">Schreiben Sie uns.</h2>
                    <p className="mt-3 max-w-[52ch] leading-relaxed text-[var(--color-text)]">Ein paar Eckdaten reichen für den Anfang.</p>
                  </div>

                  <form onSubmit={handleSubmit} aria-busy={status === "submitting"} className="grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="font-medium text-[var(--color-heading)]">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        className="min-h-12 w-full rounded-[var(--radius-control)] border border-[var(--color-navbar-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-heading)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="email" className="font-medium text-[var(--color-heading)]">E-Mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        spellCheck={false}
                        required
                        className="min-h-12 w-full rounded-[var(--radius-control)] border border-[var(--color-navbar-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-heading)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div className="grid gap-2 md:self-start">
                      <label htmlFor="package" className="font-medium text-[var(--color-heading)]">Interessiert an</label>
                      <select
                        id="package"
                        name="package"
                        autoComplete="off"
                        defaultValue={selectedPackage}
                        required
                        className="min-h-12 w-full rounded-[var(--radius-control)] border border-[var(--color-navbar-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-heading)]"
                      >
                        <option value="Kein bestimmtes Paket">Kein bestimmtes Paket</option>
                        {packageTitles.map((title) => <option key={title} value={title}>{title}</option>)}
                      </select>
                    </div>

                    <div className="grid gap-2 md:row-span-2">
                      <label htmlFor="message" className="font-medium text-[var(--color-heading)]">Ihre Nachricht</label>
                      <textarea
                        id="message"
                        name="message"
                        autoComplete="off"
                        rows={5}
                        required
                        placeholder="Worum geht es in Ihrem Projekt?"
                        className="min-h-36 w-full resize-y rounded-[var(--radius-control)] border border-[var(--color-navbar-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-heading)] placeholder:text-[var(--color-text-muted)] md:h-full md:max-h-56"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-4 md:col-start-1">
                      <MagneticButton
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 font-accent text-lg text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-60"
                      >
                        {status === "submitting" ? "Senden..." : "Anfrage senden"}
                        <HiOutlineArrowRight aria-hidden="true" className="h-5 w-5" />
                      </MagneticButton>
                      {status === "error" ? (
                        <p ref={errorRef} tabIndex={-1} role="alert" className="text-sm text-red-700">Fehler: {errorMessage}</p>
                      ) : null}
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" className="min-h-[26rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <ContactSuccessAnimation />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section
          ref={darkPanelRef}
          id="dark-contact-panel"
          className="contact-panel flex min-h-[100dvh] w-full items-center bg-[#1c1b1a] px-4 py-24 text-[#f9f8f4] sm:px-6 lg:h-[100dvh] lg:w-screen"
        >
          <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-[12ch] text-balance text-[clamp(3.2rem,8vw,7.8rem)] leading-[0.88] text-white lg:col-span-8">Oder sprechen wir direkt.</h2>
            <div className="space-y-7 lg:col-span-4">
              <div>
                <p className="font-accent text-sm text-[#ff8552]">E-Mail</p>
                <a href="mailto:hallo@cmdstudios.at" className="mt-2 block break-all text-xl text-white hover:text-[#ff8552] sm:text-2xl">hallo@cmdstudios.at</a>
              </div>
              <div>
                <p className="font-accent text-sm text-[#ff8552]">Standort</p>
                <p className="mt-2 text-lg text-white/72">Ein Co-Working Space in Ihrer Nähe</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {horizontal ? (
        <div className="fixed bottom-6 right-6 z-50 hidden gap-2 lg:flex">
          <button
            type="button"
            onClick={() => goToIndex(activePanel - 1)}
            disabled={activePanel === 0}
            className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-[#f9f8f4] text-[#1c1b1a] shadow-[0_12px_32px_rgb(28_27_26_/_12%)] transition-transform hover:-translate-y-1 disabled:opacity-30"
            aria-label="Vorheriges Panel"
          >
            <HiArrowLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goToIndex(activePanel + 1)}
            disabled={activePanel === TOTAL_PANELS - 1}
            className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white transition-transform hover:-translate-y-1 disabled:opacity-30"
            aria-label="Nächstes Panel"
          >
            <HiArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
