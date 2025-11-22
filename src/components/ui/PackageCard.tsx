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
          <span className='px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-zinc-900 bg-accent rounded-full'>
            Am Beliebtesten
          </span>
        </div>
      )}

      <div className="mb-6 md:mb-8">
        <h3 className={`text-2xl md:text-3xl font-bold tracking-normal mb-2 ${isPopular ? 'text-white' : 'text-zinc-900'}`}>
            {pkg.title}
        </h3>
        <p className={`text-sm font-medium uppercase tracking-wider ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {pkg.description}
        </p>
      </div>

      <div className="mb-6 md:mb-8 flex items-baseline gap-1">
        <span className={`text-4xl md:text-5xl font-bold ${isPopular ? 'text-white' : 'text-zinc-900'}`}>
          {pkg.price}
        </span>
      </div>

      <div className={`w-full h-px mb-6 md:mb-8 ${isPopular ? 'bg-zinc-800' : 'bg-zinc-200 group-hover:bg-zinc-300'}`} />

      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`mt-1 p-0.5 rounded-full ${feature.included ? (isPopular ? 'bg-accent text-zinc-900' : 'bg-zinc-900 text-white') : 'bg-transparent'}`}>
                {feature.included ? <HiCheck className="w-3 h-3" /> : <HiMinus className="w-3 h-3 text-zinc-400" />}
            </div>
            <span className={`text-sm md:text-base leading-tight ${
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
        className={`w-full py-3 md:py-4 rounded-xl font-bold text-center transition-all duration-300
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
  {/*<div
      className={`relative flex flex-col h-full p-8 rounded-lg shadow-lg
        ${isPopular 
          ? 'bg-zinc-900 text-white border-2 border-accent' 
          : 'bg-white text-[var(--color-text)] border border-zinc-200'
        }
      `}
    >
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-sm font-semibold text-white bg-accent rounded-full">
            Beliebtestes Paket
          </span>
        </div>
      )}

      <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-[var(--color-heading)]'}`}>
        {pkg.title}
      </h3>
      <p className={`mt-2 mb-6 ${isPopular ? 'text-zinc-300' : 'text-[var(--color-text-muted)]'}`}>
        {pkg.description}
      </p>
      
      <p className="mb-6">
        <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-[var(--color-heading)]'}`}>
          {pkg.price}
        </span>
      </p>

      <ul className="space-y-3 mb-8 grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            {feature.included ? (
              <HiCheck className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-accent' : 'text-accent'}`} />
            ) : (
              <HiMinus className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-zinc-500' : 'text-zinc-400'}`} />
            )}
            <span className={!feature.included ? (isPopular ? 'text-zinc-500' : 'text-zinc-400') : ''}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <MagneticLink
        href={`/contact?package=${pkg.title}`}
        className={`inline-block text-center w-full px-6 py-3 rounded-md font-semibold
          ${isPopular
            ? 'bg-accent text-white hover:bg-accent-dark'
            : 'bg-white text-[var(--color-heading)] border border-zinc-300 hover:bg-zinc-50'
          }
        `}
      >
        Paket anfragen
      </MagneticLink>
    </div>*/}
}