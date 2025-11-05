import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.className} bg-[var(--color-page-bg)] text-[var(--color-heading)] antialiased`}>
        <LoadingProvider>
          <CustomCursor />
          <ClientLoader />
            <Navbar />
            <main className="flex flex-col min-h-screen">
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
