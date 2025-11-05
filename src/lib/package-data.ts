export interface PackageFeature {
    text: string;
    included: boolean;
}

export interface PackageData {
    id: string;
    title: string;
    description: string;
    price: string;
    features: PackageFeature[];
    isPopular?: boolean;
}

export const packages: PackageData[] = [
    {
        id: 'starter',
        title: 'Launchpad',
        description: 'Das essenzielle Paket für Startups und neue Projekte, die einen starken ersten Eindruck hinterlassen wollen.',
        price: 'Ab 1.500€',
        features: [
            { text: 'Individuelle 1-Seiten Website (Next.js)', included: true },
            { text: 'Responsive Design (Mobile & Desktop)', included: true },
            { text: 'Kontaktformular-Integration', included: true },
            { text: 'Performance-Optimierung', included: true },
            { text: '3D-Modell-Integration', included: false },
            { text: 'Video-Produktion (1 Clip)', included: false },
        ],
        isPopular: false,
    },
    {
        id: 'pro',
        title: 'Accelerator',
        description: 'Für wachsende Unternehmen, die eine umfassende digitale Präsenz mit CMS und "Wow-Effekten" benötigen.',
        price: 'Ab 4.000€',
        features: [
            { text: 'Mehrseitige Website (bis 5 Seiten)', included: true },
            { text: 'Alle "Launchpad"-Features', included: true },
            { text: 'CMS-Integration (z.B. Sanity, Contentful)', included: true },
            { text: 'Individuelle 3D-Modell-Integration', included: true },
            { text: '"Awwwards-Level" GSAP-Animationen', included: true },
            { text: 'Video-Produktion (1 Clip)', included: false },
        ],
        isPopular: true,
    },
    {
        id: 'partner',
        title: 'Partner',
        description: 'Die Full-Service-Lösung. Wir werden euer fester Partner für Web, Content und strategisches Wachstum.',
        price: 'Auf Anfrage',
        features: [
            { text: 'Unbegrenzte Seiten & Features', included: true },
            { text: 'Alle "Accelerator"-Features', included: true },
            { text: 'Laufende Betreuung (Retainer)', included: true },
            { text: 'E-Commerce-Integration', included: true },
            { text: 'Umfassende Video-Produktion', included: true },
            { text: 'SEO & Content-Strategie', included: true },
        ],
        isPopular: false,
    },
];