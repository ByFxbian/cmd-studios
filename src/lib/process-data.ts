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
      "Bevor wir eine Zeile Code schreiben, verstehen wir dein Business. Wir analysieren den Markt, definieren Ziele und entwickeln eine Roadmap, die funktioniert.",
    details: [
      "Markt- & Wettbewerbsanalyse",
      "Zielgruppen-Definition",
      "Technische Architektur & Tech-Stack",
      "Content-Strategie Workshop",
    ],
  },
  {
    id: "design",
    title: "Design & Konzept",
    description:
      "Hier bekommt deine Vision eine Form. Wir gestalten High-Fidelity Screendesigns und interaktive Prototypen, die nicht nur gut aussehen, sondern Nutzer führen.",
    details: [
      "UX/UI Design & Wireframing",
      "Interaktive Figma-Prototypen",
      "Design-System & Component Library",
      "Motion-Design Konzepte",
    ],
  },
  {
    id: "development",
    title: "Development & Production",
    description:
      "Pixel-perfekte Umsetzung. Wir nutzen modernste Technologien für maximale Performance, SEO und Skalierbarkeit. Keine Baukästen, echter Code.",
    details: [
      "Next.js & TypeScript Entwicklung",
      "GSAP & WebGL Animationen",
      "Headless CMS Integration",
      "Responsive & Performance Optimierung",
    ],
  },
  {
    id: "launch",
    title: "Launch & Growth",
    description:
      "Der Go-Live ist erst der Anfang. Wir begleiten den Start, sichern die Qualität und sorgen dafür, dass deine digitale Lösung performt und wächst.",
    details: [
      "Qualitätssicherung (QA) & Testing",
      "SEO-Basis-Setup & Analytics",
      "Deployment & Hosting Setup",
      "Laufender Support & Weiterentwicklung",
    ],
  },
];