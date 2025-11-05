'use client';

import Marquee from 'react-fast-marquee';
import { 
  TbBrandFramerMotion
} from 'react-icons/tb';
import {  FaJava, FaCamera } from 'react-icons/fa';
import { SiGreensock, SiAdobepremierepro, SiNodedotjs, SiTailwindcss, SiFigma, SiFramer, SiReact, SiTypescript, SiMysql, SiMongodb, SiAdobephotoshop, SiAdobelightroom, SiHtml5, SiCss3, SiJavascript, SiGit, SiOracle, SiFlutter, SiDart, SiSwift, SiAdobeaftereffects, SiAdobeindesign, SiAdobeillustrator, SiNextdotjs } from 'react-icons/si';
import { IconType } from 'react-icons';
import { SectionMask } from '../ui/SectionMask';


function SkillItem({ icon: Icon, name}: { icon: IconType, name: string}) {
    return (
        <div className="flex items-center mx-8">
            <Icon className="w-8 h-8 text-zinc-400" />
            <span className="ml-4 text-2xl font-semibold text-zinc-500">
                {name}
            </span>
        </div>
    );
}

export function SkillsetMarquee() {
    return (
        <section className="w-full py-16 md:py-18 bg-white border-y border-zinc-200 overflow-hidden">
            <Marquee
                autoFill={true}
                speed={60}
                pauseOnHover={false}
                gradient={true}
                gradientColor="#FFFFFF"
                gradientWidth={100}
            >
                <SkillItem icon={SiNextdotjs} name="Next.js" />
                <SkillItem icon={SiTypescript} name="TypeScript" />
                <SkillItem icon={SiReact} name="React Three Fiber" />
                <SkillItem icon={SiGreensock} name="GSAP" />
                <SkillItem icon={TbBrandFramerMotion} name="Framer Motion" />
                <SkillItem icon={SiFigma} name="Figma" />
                <SkillItem icon={SiAdobepremierepro} name="Premiere Pro" />
                <SkillItem icon={SiTailwindcss} name="Tailwind CSS" />
                <SkillItem icon={SiNodedotjs} name="Node.js" />
                <SkillItem icon={SiMysql} name="MySQL" />
                <SkillItem icon={SiMongodb} name="MongoDB" />
                <SkillItem icon={SiAdobephotoshop} name="Adobe Photoshop" />
                <SkillItem icon={SiAdobelightroom} name="Adobe Lightroom" />
                <SkillItem icon={SiHtml5} name="HTML" />
                <SkillItem icon={SiCss3} name="CSS" />
                <SkillItem icon={SiJavascript} name="JavaScript" />
                <SkillItem icon={SiGit} name="Git" />
                <SkillItem icon={FaJava} name="Java" />
                <SkillItem icon={SiFlutter} name="Flutter" />
                <SkillItem icon={SiDart} name="Dart" />
                <SkillItem icon={SiSwift} name="Swift" />
                <SkillItem icon={FaCamera} name="Camera Raw" />
                <SkillItem icon={SiAdobeaftereffects} name="Adobe After Effects" />
                <SkillItem icon={SiAdobeindesign} name="Adobe InDesign" />
                <SkillItem icon={SiAdobeillustrator} name="Adobe Illustrator" />
                <div className="w-8"></div>
            </Marquee>
        </section>
    );
}