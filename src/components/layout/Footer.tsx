import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { MagneticLink } from "@/components/ui/MagneticLink";

const footerLinks = {
  Navigation: [
    { label: "Arbeiten", href: "/portfolio" },
    { label: "Leistungen", href: "/services" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "#" },
  ],
} as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "GitHub", href: "#", icon: FaGithub },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1c1b1a] text-[#f4f0e8]">
      <div className="site-container relative z-10 pt-[clamp(5rem,9vw,9rem)]">
        <div className="grid gap-14 border-b border-white/15 pb-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-20 lg:pb-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(2.65rem,6.4vw,6.8rem)] font-bold leading-[0.88] tracking-[-0.06em]">
              Lust auf ein Projekt?
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Sie haben eine Idee, ein konkretes Vorhaben oder einfach das
              Gefühl, dass ihr Auftritt besser sein könnte? Dann schreiben Sie
              uns.
            </p>
            <MagneticLink
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center border-b border-[var(--color-primary)] pb-1 text-lg font-semibold transition-colors hover:text-[var(--color-primary)] focus-visible:text-[var(--color-primary)] sm:text-xl"
            >
              hallo@cmdstudios.at
            </MagneticLink>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_1fr_auto]">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {title}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-white/75 transition-colors hover:text-[var(--color-primary)] focus-visible:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Socials
              </p>
              <div className="flex gap-2 sm:flex-col">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:border-[var(--color-primary)] focus-visible:text-[var(--color-primary)]"
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 h-[clamp(6.5rem,15vw,14rem)] sm:mt-16" aria-hidden="true">
          <p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[15.2vw] font-bold leading-[0.7] tracking-[-0.075em] text-[#2b2927]"
          >
            CMD STUDIOS
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CMD Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
