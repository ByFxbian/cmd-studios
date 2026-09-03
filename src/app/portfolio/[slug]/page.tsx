import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { ContactSection } from "@/components/sections/ContactSection";
import { allProjects } from "@/lib/portfolio-data";
import { createSocialMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) return {};

  const socialMetadata = createSocialMetadata({
    title: `${project.title} | CMD Studios`,
    description: project.description,
    url: `/portfolio/${project.slug}`,
    image: project.imageUrl,
    imageAlt: project.title,
  });

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      ...socialMetadata.openGraph,
      type: "article",
    },
    twitter: socialMetadata.twitter,
  };
}

export default async function PortfolioDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.imageUrl,
    url: `https://cmd-studios.vercel.app/portfolio/${project.slug}`,
    creator: { "@type": "Organization", name: "CMD Studios" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      <section className="relative min-h-[82dvh] overflow-hidden bg-[#1c1b1a] pt-24 text-white">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-78"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a] via-[#1c1b1a]/45 to-black/5" />
        <div className="site-container relative z-10 flex min-h-[calc(82dvh-6rem)] items-end pb-10 md:pb-14">
          <div className="max-w-5xl">
            <p className="font-accent text-sm text-[#ff8552] md:text-base">{project.category}</p>
            <h1 className="mt-4 max-w-[15ch] text-balance text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-white">{project.title}</h1>
            <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[52ch] text-lg leading-relaxed text-white/78 md:text-2xl">{project.description}</p>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 shrink-0 items-center gap-2 rounded-full bg-white px-7 font-accent text-[#1c1b1a] transition-transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  Projekt live ansehen <HiArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[var(--color-page-bg)]">
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
            {project.sections.map((section) => (
              <article key={section.heading} className="border-t border-[var(--color-navbar-border)] pt-6">
                <h2 className="font-accent text-base text-accent">{section.heading}</h2>
                <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-[var(--color-text)] md:text-xl">{section.text}</p>
              </article>
            ))}
          </div>

          {project.techStack?.length ? (
            <div className="mt-16 border-t border-[var(--color-navbar-border)] pt-7 md:mt-24">
              <h2 className="text-3xl text-[var(--color-heading)]">Tech-Stack</h2>
              <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {project.techStack.map((tech) => (
                  <li key={tech} className="border-b border-accent/35 pb-1 text-sm text-[var(--color-text)] md:text-base">{tech}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link href="/portfolio" className="mt-14 inline-flex items-center gap-2 text-accent md:mt-20">
            <HiArrowLeft aria-hidden="true" className="h-5 w-5" /> Zurück zur Übersicht
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
