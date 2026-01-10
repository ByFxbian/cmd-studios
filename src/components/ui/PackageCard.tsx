'use client';

import type { PackageData } from '@/lib/package-data';
import { MagneticLink } from './MagneticLink';
import { HiCheck, HiMinus } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface PackageCardProps {
  pkg: PackageData;
}

export function PackageCard({ pkg }: PackageCardProps) {
  const isPopular = pkg.isPopular;

  return (
    <div className={`relative flex flex-col h-full p-6 md:p-8 rounded-2xl transition-all duration-500 group
      backdrop-blur-md border
      ${isPopular
        ? 'bg-zinc-900/90 border-zinc-800 shadow-2xl shadow-accent/10'
        : 'bg-white/40 border-white/20 hover:bg-white/60 hover:border-zinc-300 shadow-lg'
      }
    `}>
      {isPopular && (
        <div className='absolute -top-4 left-6 md:left-8'>
          <span className='px-4 py-1.5 text-[22px] tracking-wider uppercase text-zinc-900 bg-accent rounded-full'>
            Am Beliebtesten
          </span>
        </div>
      )}

      <div className="mb-6 md:mb-8">
        <h3 className={`text-3xl md:text-4xl tracking-wider mb-3 ${isPopular ? 'text-white' : 'text-zinc-900'}`}>
            {pkg.title}
        </h3>
        <p className={`text-[25px] uppercase tracking-wide ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {pkg.description}
        </p>
      </div>

      <div className="mb-6 md:mb-8 flex items-baseline gap-1">
        <span className={`text-4xl font-accent md:text-5xl ${isPopular ? 'text-white' : 'text-zinc-900'}`}>
          {pkg.price}
        </span>
      </div>

      <div className={`w-full h-px mb-6 md:mb-8 ${isPopular ? 'bg-zinc-800' : 'bg-zinc-200 group-hover:bg-zinc-300'}`} />

      <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className={`mt-1.5 p-0.5 rounded-full ${feature.included ? (isPopular ? 'bg-accent text-zinc-900' : 'bg-zinc-900 text-white') : 'bg-transparent'}`}>
                {feature.included ? <HiCheck className="w-4 h-4" /> : <HiMinus className="w-4 h-4 text-zinc-400" />}
            </div>
            <span className={`text-[22px] leading-snug ${
                !feature.included 
                ? 'text-zinc-400 line-through decoration-zinc-400/50' 
                : (isPopular ? 'text-zinc-300' : 'text-zinc-700')
            }`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <MagneticLink
        href={`/contact?package=${pkg.title}`}
        className={`w-full py-4 md:py-5 rounded-xl font-bold text-xl text-center transition-all duration-300
          ${isPopular
            ? 'bg-white text-black hover:bg-accent hover:scale-[1.02]'
            : 'bg-zinc-900 text-white hover:bg-black hover:scale-[1.02]'
          }
        `}
      >
        Jetzt Starten
      </MagneticLink>
    </div>
  );
}