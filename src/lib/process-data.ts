export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'Briefing & Konzept',
    description: 'Wir starten mit einem tiefen Verständnis eurer Ziele. Gemeinsam definieren wir die Vision und legen den Grundstein für das Projekt.',
  },
  {
    id: '02',
    title: 'Design & Prototyping',
    description: 'In Figma (oder eurem Tool der Wahl) entsteht ein klickbarer Prototyp. Hier wird die User Experience greifbar und iterierbar.',
  },
  {
    id: '03',
    title: 'Entwicklung & Testing',
    description: 'Mit Next.js, GSAP und Framer Motion setzen wir das Design in sauberen, performanten Code um. Kontinuierliches Feedback ist hier der Schlüssel.',
  },
  {
    id: '04',
    title: 'Launch & Optimierung',
    description: 'Go-Live! Aber unsere Arbeit endet hier nicht. Wir monitoren die Performance und stehen für zukünftige Anpassungen und Wachstum bereit.',
  },
];