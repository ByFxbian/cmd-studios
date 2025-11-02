export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Web-Entwicklung" | "Video-Produktion"; 
  imageUrl: string;
  description: string;
  content: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    slug: "alkos-barber",
    title: "Alkos Barber Buchungssystem",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+1", 
    description: "Ein maßgeschneidertes Buchungstool mit Admin-Dashboard.",
    content: `
      <h3>Das Problem</h3>
      <p>Alko's Barber Shop benötigte eine Lösung, um von der Zettelwirtschaft wegzukommen und Online-Buchungen effizient zu verwalten.</p>
      <h3>Die Lösung</h3>
      <p>Wir haben eine blitzschnelle Next.js-Anwendung mit einem Sanity.io-Backend entwickelt. Kunden können jetzt online buchen, und die Barbiere verwalten ihre Termine in einem geschützten Admin-Bereich.</p>
      <ul>
        <li>Next.js App Router</li>
        <li>Sanity.io Headless CMS</li>
        <li>Tailwind CSS</li>
        <li>Vercel-Hosting</li>
      </ul>
    `
  },
  {
    id: 2,
    slug: "xyz-fitness-imagefilm",
    title: "Imagefilm für 'XYZ Fitness'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+1",
    description: "Dynamischer Imagefilm zur Neukundengewinnung.",
    content: `
      <h3>Das Ziel</h3>
      <p>Das Fitnessstudio 'XYZ' wollte seine energiegeladene Community und die hochwertige Ausstattung in einem dynamischen Video präsentieren.</p>
      <h3>Unsere Umsetzung</h3>
      <p>Mit schnellen Schnitten, stabilisierten Kamerafahrten (Gimbal) und einer professionellen Farbkorrektur haben wir die Essenz des Studios eingefangen. Das Video wird auf der Website und auf Social-Media-Kanälen eingesetzt.</p>
    `
  },
  {
    id: 3,
    slug: "muster-ag-relaunch",
    title: "Website Relaunch 'Muster AG'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+2",
    description: "Moderner Relaunch einer Corporate-Website.",
     content: `
      <h3>Das Problem</h3>
      <p>Die alte Website der Muster AG war langsam, nicht mobil-optimiert und schwer zu pflegen.</p>
      <h3>Die Lösung</h3>
      <p>Ein kompletter Relaunch auf Basis von Next.js sorgte für exzellente Ladezeiten und Top-Core-Web-Vitals. Das neue Design ist clean, professionell und auf allen Geräten perfekt bedienbar.</p>
    `
  },
  {
    id: 4,
    slug: "summer-vibes-aftermovie",
    title: "Event-Aftermovie 'Summer Vibes'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+2",
    description: "Die besten Momente eines Sommer-Festivals eingefangen.",
    content: `
      <h3>Das Ziel</h3>
      <p>Die Emotionen und die Energie des 'Summer Vibes' Festivals für die sozialen Medien und als Teaser für das nächste Jahr einfangen.</p>
      <h3>Unsere Umsetzung</h3>
      <p>Mit Drohnenaufnahmen, Slow-Motion-Details und einem mitreißenden Sound-Design haben wir einen Aftermovie produziert, der Gänsehaut erzeugt.</p>
    `
  },
  {
    id: 5,
    slug: "tech-inc-portraits",
    title: "Corporate Portraits 'Tech Inc.'",
    category: "Video-Produktion",
    imageUrl: "https://placehold.co/800x800.png?text=Video+3",
    description: "Professionelle Business-Porträts für das Management-Team.",
    content: `
      <h3>Das Ziel</h3>
      <p>Einheitliche und professionelle Video-Porträts (Shorts) des Management-Teams für die 'Über uns'-Seite und LinkedIn.</p>
      <h3>Unsere Umsetzung</h3>
      <p>Wir haben ein mobiles Studio-Setting direkt beim Kunden aufgebaut und mit gezielter Lichtsetzung und Coaching vor der Kamera den perfekten Look für 'Tech Inc.' kreiert.</p>
    `
  },
  {
    id: 6,
    slug: "blogify-cms",
    title: "Headless CMS für 'Blogify'",
    category: "Web-Entwicklung",
    imageUrl: "https://placehold.co/800x800.png?text=Web+3",
    description: "Migration eines alten WordPress-Blogs zu einem performanten Headless-Setup.",
    content: `
      <h3>Das Problem</h3>
      <p>Ein beliebter Blog litt unter langsamen Ladezeiten und ständigen Sicherheitsupdates von WordPress-Plugins.</p>
      <h3>Die Lösung</h3>
      <p>Wir haben den Content zu Strapi (Headless CMS) migriert und ein neues Frontend mit Next.js (Static Site Generation) gebaut. Das Ergebnis: Perfekte Ladezeiten, höhere Sicherheit und ein glücklicherer Redakteur.</p>
    `
  }
];

export const featuredProjects = allProjects.slice(0, 3);