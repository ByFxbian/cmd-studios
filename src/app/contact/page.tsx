import type { Metadata } from "next";
import { ContactHorizontalScroll } from "@/components/sections/ContactHorizontalScroll";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Projektanfrage an CMD Studios für Webdesign, Development, App Design, Video oder Social-Media-Content.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt | CMD Studios",
    description: "Erzählen Sie uns von Ihrem Projekt. Wir melden uns mit einer klaren Einschätzung zurück.",
    url: "/contact",
  },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const params = await searchParams;
  const packageName = params?.package;

  return (
    <ContactHorizontalScroll initialPackage={packageName} />
  );
}
