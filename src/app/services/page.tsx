
'use client';

import { ContactSection } from '@/components/sections/ContactSection';
import { PackageSection } from '@/components/sections/PackageSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';
import { ServiceHeroSection } from '@/components/sections/ServiceHeroSection';
import { HiCode, HiCamera, HiOutlineSparkles, HiOutlineDatabase, HiOutlineChartSquareBar, HiOutlineFilm } from 'react-icons/hi';

const webServices = [
  { 
    name: "Next.js & React", 
    description: "Ultraschnelle, serverseitig gerenderte Web-Applikationen.",
    icon: HiCode
  },
  { 
    name: "Headless CMS", 
    description: "Volle Kontrolle über Ihre Inhalte mit Systemen wie Sanity oder Strapi.",
    icon: HiOutlineDatabase
  },
  { 
    name: "SEO & Performance", 
    description: "Technische Optimierung für Top-Rankings und Core Web Vitals.",
    icon: HiOutlineChartSquareBar
  },
];

const videoServices = [
  { 
    name: "Imagefilme", 
    description: "Wir erzählen die Geschichte Ihrer Marke in kinoreifen Bildern.",
    icon: HiOutlineFilm
  },
  { 
    name: "Social Media Content", 
    description: "Kurze, prägnante Videos (Reels, TikToks), die Aufmerksamkeit erregen.",
    icon: HiCamera
  },
  { 
    name: "Branding & Animation", 
    description: "Logo-Animationen und Grafiken, die Ihre Identität stärken.",
    icon: HiOutlineSparkles
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      
      {/*<ServiceDetailSection
        id="web"
        title="Web-Entwicklung"
        subtitle="Von der Vision zur Applikation."
        description="Wir sind spezialisiert auf moderne Web-Technologien. Unser Fokus liegt auf der Entwicklung von maßgeschneiderten, performanten und skalierbaren Websites und Web-Apps, die Ihre digitalen Ziele nicht nur erreichen, sondern übertreffen."
        imageUrl="https://placehold.co/1200x900.png?text=Web+Projekt+Visual"
        services={webServices}
        icon={HiCode}
        imageSide="right"
      />

      <ServiceDetailSection
        id="video"
        title="Video & Content"
        subtitle="Ihre Vision in Bewegung."
        description="Bewegtbild ist der Kern digitaler Kommunikation. Wir produzieren hochwertigen Video-Content, der Ihre Zielgruppe fesselt – vom emotionalen Imagefilm bis zum viralen Social-Media-Clip."
        imageUrl="https://placehold.co/1200x900.png?text=Video+Projekt+Visual"
        services={videoServices}
        icon={HiCamera}
        imageSide="left"
        isDark={true}
      />*/}
      <PackageSection />

      <ProcessSection />

      <ContactSection />
    </>
  );
}