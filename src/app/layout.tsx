import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { LoadingProvider } from "@/context/LoadingContext";
import { ClientLoader } from "@/components/layout/ClientLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const krimside = localFont({
  src: '../fonts/krimside.otf',
  variable: '--font-heading',
  display: 'swap',
});

const pramukh = localFont({
  src: '../fonts/PramukhRounded-Regular.otf',
  variable: '--font-body',
  display: 'swap',
});

const gellis = localFont({
  src: '../fonts/gellis.otf',
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cmd-studios.vercel.app'),
  title: {
    default: "CMD Studios | Webdesign, Development & Content",
    template: "%s | CMD Studios",
  },
  description: "CMD Studios gestaltet und entwickelt individuelle Websites, Apps und Content für Unternehmen mit digitalem Wiedererkennungswert.",
  applicationName: "CMD Studios",
  authors: [{ name: "CMD Studios", url: "https://cmd-studios.vercel.app" }],
  creator: "CMD Studios",
  publisher: "CMD Studios",
  alternates: {
    canonical: '/',
  },
  category: "Webdesign und Content Creation",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "App Design",
    "Next.js Entwicklung",
    "Videoproduktion",
    "Social Media Content",
    "Content Creation",
    "CMD Studios",
  ],
  openGraph: {
    title: "CMD Studios | Digital mit Charakter",
    description: "Individuelle Websites, Apps und Content für Unternehmen mit digitalem Wiedererkennungswert.",
    type: "website",
    locale: "de_DE",
    siteName: "CMD Studios",
    url: "https://cmd-studios.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMD Studios | Digital mit Charakter",
    description: "Individuelle Websites, Apps und Content für Unternehmen mit digitalem Wiedererkennungswert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f8f4",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CMD Studios",
  url: "https://cmd-studios.vercel.app",
  email: "hallo@cmdstudios.at",
  description: "Webdesign, App Design, Development, Videoproduktion und Content Creation für Unternehmen.",
  areaServed: "AT",
  knowsAbout: [
    "Webdesign",
    "Webentwicklung",
    "App Design",
    "Videoproduktion",
    "Social Media Content",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className={`${quicksand.variable} ${krimside.variable} ${pramukh.variable} ${gellis.variable} bg-[var(--color-page-bg)] text-[var(--color-heading)] overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-[var(--color-heading)] focus:px-4 focus:py-2 focus:text-[var(--color-page-bg)]"
        >
          Zum Inhalt springen
        </a>
        <LoadingProvider>
          <SmoothScroll>
            <CustomCursor />
            <ClientLoader />
              <Navbar />
              <main id="main-content" className="relative z-10 flex min-h-[100dvh] flex-col bg-[var(--color-page-bg)] shadow-[0_24px_80px_rgb(28_27_26_/_12%)] transition-colors duration-300">
                <div className="flex-grow relative z-10 bg-transparent">
                  <PageTransition>
                    {children}
                  </PageTransition>
                </div>
              </main>
            <Footer />
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
