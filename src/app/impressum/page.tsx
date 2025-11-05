import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";

export default function ImpressumPage() {
    return (
        <>
            <ServiceHeroSection title="Impressum" />

            <section className="w-full py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="prose prose-lg prose-zinc max-w-none text-[var(--color-text)] prose-headings:text-[var(--color-heading)] prose-strong:text-[var(--color-heading)]">
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <p>
                        Max Mustermann<br />
                        Musterstraße 111<br />
                        12345 Musterstadt
                        </p>

                        <h2>Kontakt</h2>
                        <p>
                        Telefon: +49 (0) 123 44 55 66<br />
                        E-Mail: mail@cmd-studios.de
                        </p>

                        <h2>Redaktionell verantwortlich</h2>
                        <p>
                        Fabian & Antonio<br />
                        Musterstraße 111<br />
                        12345 Musterstadt
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}