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
    <div
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
    </div>
  );
}