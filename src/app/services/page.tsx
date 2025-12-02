
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

      <PackageSection />

      <ProcessSection />

      <ContactSection />
    </>
  );
}