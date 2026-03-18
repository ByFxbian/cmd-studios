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
        description: 'Der ideale Einstieg für Startups und neue Projekte, die mit einem starken ersten Auftritt online gehen wollen.',
        price: 'Ab 1.500€',
        features: [
            { text: 'Individuelle Onepager-Seiten Website mit Next.js', included: true },
            { text: 'Responsive Design für Mobile & Desktop', included: true },
            { text: 'Kontaktformular-Integration', included: true },
            { text: 'Optimierte Performance', included: true },
            { text: '3D-Modell-Integration', included: false },
            { text: 'Videoproduktion (1 Clip)', included: false },
        ],
        isPopular: false,
    },
    {
        id: 'pro',
        title: 'Accelerator',
        description: 'Für Unternehmen, die mehr wollen als nur eine Website - mit mehreren Seiten, CMS und einem Auftritt, der deutlich mehr Eindruck hinterlässt.',
        price: 'Ab 4.000€',
        features: [
            { text: 'Mehrseitige Website mit bis zu 5 Seiten', included: true },
            { text: 'Alle Launchpad-Leistungen', included: true },
            { text: 'CMS-Integration, z.B. mit Sanity oder Contentful', included: true },
            { text: 'Individuelle 3D-Modell-Integration', included: true },
            { text: 'Hochwertige Animationen mit GSAP', included: true },
            { text: 'Videoproduktion (1 Clip)', included: false },
        ],
        isPopular: true,
    },
    {
        id: 'partner',
        title: 'Partner',
        description: 'Unsere umfassendste Lösung, für Unternehmen, die langfristig einen festen Partner für Web, Content und digitale Weiterentwicklung suchen.',
        price: 'Auf Anfrage',
        features: [
            { text: 'Unbegrenzte Seiten und Features', included: true },
            { text: 'Alle Accelerator-Leistungen', included: true },
            { text: 'Laufende Betreuung imt Retainer-Modell', included: true },
            { text: 'E-Commerce-Integration', included: true },
            { text: 'Umfassende Videoproduktion', included: true },
            { text: 'SEO- und Content-Strategie', included: true },
        ],
        isPopular: false,
    },
];