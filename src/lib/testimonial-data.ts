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
        name: "ALKOS",
        company: 'CEO, Alkosbarber',
        quote: 'Die Zusammenarbeit mit CMD Studios war eine der besten Entscheidungen, die ich für Alkosbarber getroffen habe. Ihre Fähigkeit, komplexe Ideen in eine so elegante Website und Social-Media-Content zu übersetzen, ist unübertroffen.',
        imageUrl: 'https://srtkhlfsd31dcfzp.public.blob.vercel-storage.com/ALKOS.png',
    },
]
