export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Strategie",
    description:
      "Bevor wir gestalten oder entwickeln, verstehen wir zuerst Ihr Unternehmen. Wir analysieren Markt, Zielgruppe und Anforderungen und schaffen damit eine klare Grundlage für das Projekt.",
    details: [
      "Markt- und Wettbewerbsanalyse",
      "Zielgruppen-Definition",
      "Technische Architektur und Tech-Stack",
      "Workshop für Content und Ausrichtung",
    ],
  },
  {
    id: "design",
    title: "Design & Konzept",
    description:
      "In dieser Phase entsteht die gestalterische Richtung des Projekts. Wir entwickeln Screen-Designs und Prototypen, die nicht nur gut aussehen, sondern Nutzer klar durch die Seite führen.",
    details: [
      "UX/UI-Design und Wireframing",
      "Interaktive Prototypen in Figma",
      "Design-System und Component Library",
      "Konzepte für Bewegung und Interaktion",
    ],
  },
  {
    id: "development",
    title: "Development & Produktion",
    description:
      "Jetzt wird aus dem Konzept ein funktionierendes Produkt. Wir entwickeln individuell, leistungsstark und ohne Baukastensysteme - mit Fokus auf Performance, Flexibilität und Qualität.",
    details: [
      "Entwicklung mit Next.js und TypeScript",
      "Animationen mit GSAP und WebGL",
      "Integration eines Headless CMS",
      "Responsive Umsetzung und Performance-Optimierung",
    ],
  },
  {
    id: "launch",
    title: "Launch & Weiterentwicklung",
    description:
      "Mit dem Launch ist das Projekt nicht abgeschlossen. Wir begleiten den Go-Live, prüfen die Qualität und schaffen die Basis dafür, dass Ihre digitale Lösung langfristig weiterentwickelt werden kann.",
    details: [
      "Qualitätssicherung und Testing",
      "SEO-Basis-Setup und Analytics",
      "Deployment und Hosting Setup",
      "Laufender Support und Weiterentwicklung",
    ],
  },
];