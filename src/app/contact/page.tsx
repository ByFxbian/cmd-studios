import type { Metadata } from "next";
import { ContactHorizontalScroll } from "@/components/sections/ContactHorizontalScroll";
import { createSocialMetadata } from "@/lib/seo";

const description = "Projektanfrage an CMD Studios für Webdesign, Development, App Design, Video oder Social-Media-Content.";

export const metadata: Metadata = {
  title: "Kontakt",
  description,
  alternates: { canonical: "/contact" },
  ...createSocialMetadata({
    title: "Kontakt | CMD Studios",
    description,
    url: "/contact",
  }),
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const params = await searchParams;
  const packageName = params?.package;

  return (
    <ContactHorizontalScroll initialPackage={packageName} />
  );
}
