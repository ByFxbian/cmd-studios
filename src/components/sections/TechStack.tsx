import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCss3,
  SiDart,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCamera, FaJava } from "react-icons/fa";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React Three Fiber", icon: SiReact },
  { name: "GSAP", icon: SiGreensock },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Figma", icon: SiFigma },
  { name: "Premiere Pro", icon: SiAdobepremierepro },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Lightroom", icon: SiAdobelightroom },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Git", icon: SiGit },
  { name: "Java", icon: FaJava },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Swift", icon: SiSwift },
  { name: "Camera Raw", icon: FaCamera },
  { name: "After Effects", icon: SiAdobeaftereffects },
  { name: "InDesign", icon: SiAdobeindesign },
  { name: "Illustrator", icon: SiAdobeillustrator },
];

const featured = techStack.slice(0, 10);

export function TechStack() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="site-container">
        <div className="max-w-3xl">
          <h2 className="text-balance text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.95] text-[var(--color-heading)]">
            Werkzeuge sind Mittel. Das Ergebnis zählt.
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--color-text)] md:text-xl">
            Wir wählen Technologie nach Projekt, Wartbarkeit und Performance. Nicht nach dem aktuellen Hype.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-16 md:grid-cols-5 md:gap-4">
          {featured.map((tech) => (
            <li
              key={tech.name}
              className="group flex min-h-32 flex-col justify-between rounded-[var(--radius-control)] border border-[var(--color-navbar-border)] bg-[var(--color-page-bg)] p-4 transition-transform hover:-translate-y-1"
            >
              <tech.icon aria-hidden="true" className="h-7 w-7 text-[var(--color-heading)] transition-colors group-hover:text-accent" />
              <span className="mt-8 text-sm text-[var(--color-text)]">{tech.name}</span>
            </li>
          ))}
        </ul>

        <details className="mt-8 border-t border-[var(--color-navbar-border)] pt-6">
          <summary className="w-fit rounded-full border border-[var(--color-navbar-border)] px-5 py-3 font-accent text-[var(--color-heading)] transition-colors hover:bg-[var(--color-page-bg)]">
            Alle Technologien
          </summary>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {techStack.map((tech) => (
              <li key={tech.name} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                <tech.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
                {tech.name}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
