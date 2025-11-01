import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Scene } from "@/components/ui/Scene";
import { PageTransition } from "@/components/layout/PageTransition";

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
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 antialiased`}>
        <Scene>
          <Navbar />
          <main className="flex flex-col min-h-screen">
            <div className="flex-grow relative z-10 bg-transparent">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </main>
        </Scene>
        <Footer />
      </body>
    </html>
  );
}
