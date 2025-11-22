import type { Metadata } from "next";
import { Inter, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { LoadingProvider } from "@/context/LoadingContext";
import { ClientLoader } from "@/components/layout/ClientLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ImageTrail } from "@/components/ui/ImageTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMD Studios - Web & Video",
  description: "Moderne Websites und professionelle Videoproduktion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[var(--color-page-bg)] text-[var(--color-heading)] antialiased`}>
        <LoadingProvider>
          <CustomCursor />
          <ClientLoader />
            <Navbar />
            <main className="flex flex-col min-h-screen relative z-10 bg-[var(--color-page-bg)] shadow-2xl">
              <div className="flex-grow relative z-10 bg-transparent">
                <PageTransition>
                  {children}
                </PageTransition>
              </div>
            </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
