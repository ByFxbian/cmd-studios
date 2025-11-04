export interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    imageUrl: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Max Mustermann",
        company: 'CEO, TechSolutions',
        quote: 'Die Zusammenarbeit mit CMD Studios war ein Wendepunkt. Ihre Fähigkeit, komplexe Ideen in ein elegantes Web-Erlebnis zu übersetzen, ist unübertroffen.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Erika Mustermann',
        company: 'Marketing, FutureBrand',
        quote: 'Das Team hat unsere Vision nicht nur verstanden, sondern übertroffen. Die Videoproduktion war erstklassig und hat unsere Kampagne auf ein neues Level gehoben.',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Jonas Schmidt',
        company: 'Gründer, Kreativ-Hub',
        quote: 'Von der ersten GSAP-Animation bis zum finalen R3F-Modell – die technische Expertise und das Auge für Design sind beeindruckend. Absolute Empfehlung.',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    },
]