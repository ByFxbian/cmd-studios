"use client";

import type { PackageData } from "@/lib/package-data";
import { HiCheck } from "react-icons/hi2";
import { MagneticLink } from "./MagneticLink";

export function PackageCard({ pkg }: { pkg: PackageData }) {
  const included = pkg.features.filter((feature) => feature.included);
  const excluded = pkg.features.filter((feature) => !feature.included);

  return (
    <article
      className={`flex h-full flex-col rounded-[var(--radius-card)] border p-6 sm:p-8 ${
        pkg.isPopular
          ? "border-[var(--color-heading)] bg-[var(--color-heading)] text-[var(--color-page-bg)]"
          : "border-[var(--color-navbar-border)] bg-[var(--color-surface)] text-[var(--color-heading)]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl md:text-4xl">{pkg.title}</h3>
          {pkg.isPopular ? <p className="mt-2 font-accent text-sm text-accent">Beliebte Wahl</p> : null}
        </div>
        <p className={`font-accent text-2xl md:text-3xl ${pkg.isPopular ? "text-white" : "text-accent"}`}>{pkg.price}</p>
      </div>

      <p className={`mt-6 max-w-[54ch] leading-relaxed ${pkg.isPopular ? "text-white/72" : "text-[var(--color-text)]"}`}>
        {pkg.description}
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {included.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${pkg.isPopular ? "bg-accent text-white" : "bg-[var(--color-heading)] text-[var(--color-page-bg)]"}`}>
              <HiCheck aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            <span className={pkg.isPopular ? "text-white/82" : "text-[var(--color-text)]"}>{feature.text}</span>
          </li>
        ))}
      </ul>

      {excluded.length ? (
        <details className={`mt-7 border-t pt-5 text-sm ${pkg.isPopular ? "border-white/14 text-white/62" : "border-[var(--color-navbar-border)] text-[var(--color-text-muted)]"}`}>
          <summary className="w-fit">Nicht enthalten</summary>
          <ul className="mt-3 space-y-2">
            {excluded.map((feature) => <li key={feature.text}>{feature.text}</li>)}
          </ul>
        </details>
      ) : null}

      <div className="mt-auto pt-8">
        <MagneticLink
          href={`/contact?package=${pkg.title}`}
          className={`inline-flex h-13 w-full items-center justify-center rounded-full px-6 font-accent text-lg transition-colors active:scale-[0.98] ${
            pkg.isPopular
              ? "bg-white text-[#1c1b1a] hover:bg-accent hover:text-white"
              : "bg-[var(--color-heading)] text-[var(--color-page-bg)] hover:bg-accent hover:text-white"
          }`}
        >
          Kontakt
        </MagneticLink>
      </div>
    </article>
  );
}
