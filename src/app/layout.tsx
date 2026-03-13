import type { Metadata } from "next";
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
  title: "CMD Studios - Web & Video",
  description: "Moderne Websites und professionelle Videoproduktion.",
  openGraph: {
    title: "CMD Studios - Web & Video",
    description: "Moderne Websites und professionelle Videoproduktion.",
    type: "website",
    locale: "de_DE",
    siteName: "CMD Studios",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMD Studios - Web & Video",
    description: "Moderne Websites und professionelle Videoproduktion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className={`${quicksand.variable} ${krimside.variable} ${pramukh.variable} ${gellis.variable} bg-[var(--color-page-bg)] text-[var(--color-heading)] overflow-x-hidden`}>
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
              <main id="main-content" className="flex flex-col min-h-screen relative z-10 bg-[var(--color-page-bg)] shadow-2xl transition-colors duration-500">
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
