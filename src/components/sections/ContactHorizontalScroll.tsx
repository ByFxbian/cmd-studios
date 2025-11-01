"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TOTAL_PANELS = 3;

export function ContactHorizontalScroll() {
  const sectionRef = useRef(null);
  const panelsRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0); // 3. State für aktives Panel

  const goToPanel = (index: number) => {
    if (index < 0 || index >= TOTAL_PANELS) return;

    const st = ScrollTrigger.getById("contact-scroll");
    if (st) {
      const snapTarget = st.start + (st.end - st.start) * (index / (TOTAL_PANELS - 1));
      
      gsap.to(window, {
        scrollTo: { y: snapTarget, autoKill: false },
        duration: 1.0,
        ease: 'power2.inOut',
      });
    }
  };

  useEffect(() => {
    const panelElements: HTMLElement[] = gsap.utils.toArray(".panel");

    const ctx = gsap.context(() => {
      gsap.to(panelElements, {
        xPercent: -100 * (panelElements.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "contact-scroll",
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: false,
          scrub: 1,
          end: () => "+=2000",
          snap: 1 / (panelElements.length - 1),
          
          onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (panelElements.length - 1));
            setActivePanel(newIndex); // Dieser State-Update ist OK (in einem Callback)
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      
      <div 
        ref={panelsRef}
        className="flex w-[300vw]" // 3 Panels * 100vw = 300vw
      >
        <div className="panel flex h-screen w-screen items-center justify-center p-8 bg-zinc-100">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900">
              Bereit, etwas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                Neues zu starten?
              </span>
            </h1>
            <p className="text-2xl text-zinc-700 mt-6">
              Scrollen Sie weiter, um mit uns in Kontakt zu treten.
            </p>
          </div>
        </div>

        <div className="panel flex h-screen w-screen items-center justify-center p-8 bg-white">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900">Schreiben Sie uns.</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-700">Name</label>
                <input type="text" id="name" className="w-full p-3 mt-1 border border-zinc-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700">E-Mail</label>
                <input type="email" id="email" className="w-full p-3 mt-1 border border-zinc-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700">Ihre Nachricht</label>
                <textarea id="message" rows={5} className="w-full p-3 mt-1 border border-zinc-300 rounded-md"></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-accent text-white font-semibold px-8 py-3 rounded-md hover:bg-accent-dark transition-colors w-full"
              >
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
        
        <div className="panel flex h-screen w-screen items-center justify-center p-8 bg-zinc-900 text-white">
          <div className="text-left max-w-lg">
            <h2 className="text-4xl font-bold mb-8">
              Oder treffen wir uns.
            </h2>
            <div className="space-y-4 text-xl">
              <p>
                <strong className="text-accent">E-Mail:</strong><br/>
                <a href="mailto:hallo@cmdstudios.de" className="hover:underline">hallo@cmdstudios.de</a>
              </p>
              <p>
                <strong className="text-accent">Standort:</strong><br/>
                Ein Co-Working Space in deiner Nähe
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 z-50 flex gap-3">
        <button
          onClick={() => goToPanel(activePanel - 1)}
          disabled={activePanel === 0}
          className="bg-white rounded-full p-3 shadow-lg text-zinc-900
                     hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed
                     transition-opacity"
          aria-label="Vorheriges Panel"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => goToPanel(activePanel + 1)}
          // 6. KORREKTUR: 'TOTAL_PANELS' verwenden
          disabled={activePanel === (TOTAL_PANELS - 1)}
          className="bg-white rounded-full p-3 shadow-lg text-zinc-900
                     hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed
                     transition-opacity"
          aria-label="Nächstes Panel"
        >
          <HiArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}