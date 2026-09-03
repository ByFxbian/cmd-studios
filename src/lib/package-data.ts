export interface PackageFeature {
    text: string;
    included: boolean;
}

export type PackageCategory = 'web' | 'content';

export interface PackageData {
    id: string;
    title: string;
    description: string;
    price: string;
    features: PackageFeature[];
    isPopular?: boolean;
    category: PackageCategory;
}

export const packages: PackageData[] = [
    {
        id: 'starter',
        title: 'Launchpad',
        description: 'Ideal für Startups und neue Projekte, die einen starken, modernen ersten Online-Auftritt brauchen.',
        price: 'Ab 2.800€',
        features: [
            { text: 'Individuelle Onepager-Website mit Next.js (bis zu 6 Sektionen)', included: true },
            { text: 'Responsives Design für Mobile & Desktop', included: true },
            { text: 'Kontaktformular-Integration', included: true },
            { text: 'Optimierte Performance & saubere SEO-Basis', included: true },
            { text: 'DSGVO-konformes Setup (Cookie-Banner, Impressum-Struktur)', included: true },
            { text: 'Basis-Unternehmensvideo (z. B. zur Vorstellung oder als dynamisches Hintergrundelement nutzbar)', included: true },
            { text: 'CMS-Integration zur Selbstverwaltung', included: false },
            { text: '3D-Modell-Integration', included: false },
            { text: 'Mehrere Unterseiten', included: false },
        ],
        isPopular: false,
        category: 'web',
    },
    {
        id: 'pro',
        title: 'Accelerator',
        description: 'Für etablierte Unternehmen und Marken, die mehr als eine einfache Website wollen und eine Plattform zur Kundengewinnung suchen.',
        price: 'Ab 6.500€',
        features: [
            { text: 'Mehrseitige Website mit bis zu 5 individuellen Seiten', included: true },
            { text: 'Alle Launchpad-Leistungen', included: true },
            { text: 'Headless-CMS-Integration (z. B. mit Sanity oder Contentful) zur flexiblen Verwaltung von Texten und Bildern', included: true },
            { text: 'Individuelle 3D-Modell-Integration (limitiert auf 1-2 Modelle)', included: true },
            { text: 'Hochwertige, interaktive (Scroll-)Animationen mit GSAP', included: true },
            { text: 'Erweitertes Unternehmensvideo / Brand-Video (bis ca. 60 Sek., inkl. professionellem Schnitt und Farbkorrektur)', included: true },
            { text: 'E-Commerce-Integration', included: false },
            { text: 'Laufende monatliche Betreuung', included: false },
        ],
        isPopular: false,
        category: 'web',
    },
    {
        id: 'partner',
        title: 'Web Partner',
        description: 'Für wachsende Unternehmen, die langfristig einen festen Partner für Web, Content und digitale Weiterentwicklung suchen.',
        price: 'Ab 800€ / Monat',
        features: [
            { text: 'Fixes monatliches Stundenkontingent (z. B. 10 Stunden) für neue Features und Layouts', included: true },
            { text: 'Laufende technische Wartung & Hosting-Management', included: true },
            { text: 'Direkter Ansprechpartner ohne Wartezeiten', included: true },
            { text: 'Regelmäßiges SEO- und Performance-Monitoring', included: true },
            { text: 'A/B-Testing und Conversion-Optimierung', included: true },
            { text: 'Sicherheitsupdates und Bugfixes', included: true },
        ],
        isPopular: true,
        category: 'web',
    },
    {
        id: 'social-shorts',
        title: 'Social Shorts',
        description: 'Für Marken, die schnelle Sichtbarkeit und dynamischen Content für Plattformen wie Instagram, TikTok oder LinkedIn brauchen.',
        price: 'Ab 1.500€',
        features: [
            { text: '½ Drehtag vor Ort inkl. professionellem Kamera- & Licht-Equipment', included: true },
            { text: 'Konzept & Skript-Ideen vorab', included: true },
            { text: 'Schnitt von 3 bis 5 Kurzvideos (15-30 Sekunden, Hochformatierung)', included: true },
            { text: 'Farbkorrektur (Color Grading) & Einbindung lizenzfreier Musik', included: true },
            { text: '1 Korrekturschleife', included: true },
            { text: 'Ausführliche Interviews oder komplexe Storylines', included: false },
            { text: 'Laufende monatliche Betreuung der Kanäle', included: false },
        ],
        isPopular: true,
        category: 'content',
    },
    {
        id: 'brand-story',
        title: 'Brand Story',
        description: 'Für Unternehmen, die Vertrauen aufbauen und ihre Geschichte durch ein hochwertiges, professionelles Video präsentieren wollen.',
        price: 'Ab 3.800€',
        features: [
            { text: '1 voller Drehtag inkl. professionellem Licht- & Ton-Setup', included: true },
            { text: 'Gemeinsame Entwicklung von Storyboard und rotem Faden', included: true },
            { text: 'Führung von Interviews (z. B. Geschäftsführung oder Team)', included: true },
            { text: 'Schnitt eines 1- bis 2-minütigen Imagefilms', included: true },
            { text: 'Sound-Design & Farbkorrektur', included: true },
            { text: '1 zusätzlicher kurzer Teaser für Social Media', included: true },
            { text: 'Verwaltung von Social-Media-Profilen', included: false },
        ],
        isPopular: false,
        category: 'content',
    },
    {
        id: 'content-partner',
        title: 'Content Partner',
        description: 'Für Unternehmen, die ihren Social-Media-Auftritt komplett auslagern und kontinuierlich wachsen wollen.',
        price: 'Ab 1.490€ / Monat',
        features: [
            { text: '1 fixer Drehtag pro Monat bei euch vor Ort zur Materialgewinnung', included: true },
            { text: 'Strategische Redaktionsplanung für die nächsten 30 Tage', included: true },
            { text: 'Laufende Produktion und Schnitt von 2 bis 3 fertigen Postings/Videos pro Woche', included: true },
            { text: 'Community Management (Beantwortung von Kommentaren und DMs)', included: true },
            { text: 'Monatliches Reporting über Reichweite und Performance', included: true },
            { text: 'Einrichtung und Optimierung der Social-Media-Profile', included: true },
        ],
        isPopular: false,
        category: 'content',
    },
];
