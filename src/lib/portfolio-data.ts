export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion";
  imageUrl: string;
  description: string;
  sections: {
    heading: string;
    text: string;
  }[];
  techStack?: string[];
  liveUrl?: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    slug: "alkosbarber-web",
    title: "Alkos Barber Webauftritt",
    category: "Web-Entwicklung",
    imageUrl: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/alkosbarber_img2.png",
    description: "Ein maßgeschneidertes Buchungstool mit Admin-Dashboard.",
    liveUrl: "https://www.alkosbarber.at",
    sections: [
      {
        heading: "Das Problem",
        text: "Alkos Barber benötigte eine Lösung, um von der Zettelwirtschaft wegzukommen und Online-Buchungen effizient zu verwalten."
      },
      {
        heading: "Die Lösung",
        text: "Wir haben eine blitzschnelle Next.js-Anwendung mit einem Sanity.io-Backend entwickelt. Kunden können jetzt online buchen, und die Barbiere verwalten ihre Termine in einem geschützten Admin-Bereich."
      }
    ],
    techStack: ["Next.js App Router", "Sanity.io Headless CMS", "Tailwind CSS", "Vercel-Hosting"]
  },
  {
    id: 2,
    slug: "alkosbarber-content",
    title: "Social Media Content für 'Alkos Barber'",
    category: "Video-Produktion",
    imageUrl: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/alkosbarber_img2.png",
    description: "Dynamischer Imagefilm zur Neukundengewinnung.",
    sections: [
      {
        heading: "Das Ziel",
        text: "Alkos Barber wollte zusätzlich zur Webseite noch ansprechenden Video-Content für Instagram und TikTok, um die Marke zu stärken und neue Kunden zu gewinnen."
      },
      {
        heading: "Unsere Umsetzung",
        text: "Mit schnellen Schnitten, stabilisierten Kamerafahrten (Gimbal) und einer professionellen Farbkorrektur haben wir die Essenz des Barbershops eingefangen. Die Videos wurden speziell für Social Media optimiert und haben bereits eine starke Resonanz erzielt."
      }
    ]
  },
  {
    id: 3,
    slug: "vindobona-haustechnik-relaunch",
    title: "Website Relaunch 'Vindobona Haustechnik'",
    category: "Web-Entwicklung",
    imageUrl: "https://bz2wjzy3qokef9e7.public.blob.vercel-storage.com/VindobonaHaustechnik_img1.png",
    description: "Moderner Relaunch einer Corporate-Website.",
    sections: [
      {
        heading: "Das Problem",
        text: "Die alte Website der Vindobona Haustechnik war langsam, nicht mobil-optimiert und schwer zu pflegen."
      },
      {
        heading: "Die Lösung",
        text: "Ein kompletter Relaunch auf Basis von Next.js sorgte für exzellente Ladezeiten und Top-Core-Web-Vitals. Das neue Design ist clean, professionell und auf allen Geräten perfekt bedienbar."
      }
    ]
  },
];

export const featuredProjects = allProjects.slice(0, 3);
