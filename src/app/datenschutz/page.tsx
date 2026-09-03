import type { Metadata } from "next";
import { LegalHero } from "@/components/sections/LegalHero";
import { createSocialMetadata } from "@/lib/seo";

const description = "Datenschutzerklärung von CMD Studios.";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description,
  alternates: { canonical: "/datenschutz" },
  ...createSocialMetadata({ title: "Datenschutzerklärung | CMD Studios", description, url: "/datenschutz" }),
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalHero title="Datenschutzerklärung" />
      
      <section className="w-full bg-[var(--color-page-bg)] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="prose prose-lg prose-zinc max-w-none text-[var(--color-text)] prose-headings:text-[var(--color-heading)] prose-strong:text-[var(--color-heading)]">

            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Hier kommt dein Datenschutztext hin. Wenn Sie unsere Website besuchen, 
              werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich 
              identifiziert werden können...
            </p>

            <h2>2. Datenerfassung auf dieser Website</h2>
            <p>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
