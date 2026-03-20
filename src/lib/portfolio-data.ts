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
    slug: "alkos-barber",
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
    slug: "xyz-fitness-imagefilm",
    title: "Imagefilm für 'XYZ Fitness'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+1",
    description: "Dynamischer Imagefilm zur Neukundengewinnung.",
    sections: [
      {
        heading: "Das Ziel",
        text: "Das Fitnessstudio 'XYZ' wollte seine energiegeladene Community und die hochwertige Ausstattung in einem dynamischen Video präsentieren."
      },
      {
        heading: "Unsere Umsetzung",
        text: "Mit schnellen Schnitten, stabilisierten Kamerafahrten (Gimbal) und einer professionellen Farbkorrektur haben wir die Essenz des Studios eingefangen. Das Video wird auf der Website und auf Social-Media-Kanälen eingesetzt."
      }
    ]
  },
  {
    id: 3,
    slug: "muster-ag-relaunch",
    title: "Website Relaunch 'Muster AG'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+2",
    description: "Moderner Relaunch einer Corporate-Website.",
    sections: [
      {
        heading: "Das Problem",
        text: "Die alte Website der Muster AG war langsam, nicht mobil-optimiert und schwer zu pflegen."
      },
      {
        heading: "Die Lösung",
        text: "Ein kompletter Relaunch auf Basis von Next.js sorgte für exzellente Ladezeiten und Top-Core-Web-Vitals. Das neue Design ist clean, professionell und auf allen Geräten perfekt bedienbar."
      }
    ]
  },
  {
    id: 4,
    slug: "summer-vibes-aftermovie",
    title: "Event-Aftermovie 'Summer Vibes'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+2",
    description: "Die besten Momente eines Sommer-Festivals eingefangen.",
    sections: [
      {
        heading: "Das Ziel",
        text: "Die Emotionen und die Energie des 'Summer Vibes' Festivals für die sozialen Medien und als Teaser für das nächste Jahr einfangen."
      },
      {
        heading: "Unsere Umsetzung",
        text: "Mit Drohnenaufnahmen, Slow-Motion-Details und einem mitreißenden Sound-Design haben wir einen Aftermovie produziert, der Gänsehaut erzeugt."
      }
    ]
  },
  {
    id: 5,
    slug: "tech-inc-portraits",
    title: "Corporate Portraits 'Tech Inc.'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+3",
    description: "Professionelle Business-Porträts für das Management-Team.",
    sections: [
      {
        heading: "Das Ziel",
        text: "Einheitliche und professionelle Video-Porträts (Shorts) des Management-Teams für die 'Über uns'-Seite und LinkedIn."
      },
      {
        heading: "Unsere Umsetzung",
        text: "Wir haben ein mobiles Studio-Setting direkt beim Kunden aufgebaut und mit gezielter Lichtsetzung und Coaching vor der Kamera den perfekten Look für 'Tech Inc.' kreiert."
      }
    ]
  },
  {
    id: 6,
    slug: "blogify-cms",
    title: "Headless CMS für 'Blogify'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+3",
    description: "Migration eines alten WordPress-Blogs zu einem performanten Headless-Setup.",
    sections: [
      {
        heading: "Das Problem",
        text: "Ein beliebter Blog litt unter langsamen Ladezeiten und ständigen Sicherheitsupdates von WordPress-Plugins."
      },
      {
        heading: "Die Lösung",
        text: "Wir haben den Content zu Strapi (Headless CMS) migriert und ein neues Frontend mit Next.js (Static Site Generation) gebaut. Das Ergebnis: Perfekte Ladezeiten, höhere Sicherheit und ein glücklicherer Redakteur."
      }
    ]
  }
];

export const featuredProjects = allProjects.slice(0, 3);