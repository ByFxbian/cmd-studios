/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { type FC } from 'react';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);
const CLOSED = '#18181b';
const OPEN   = '#ffffff';

export const MenuToggle: FC<{ toggle: () => void, isOpen: boolean }> = ({ toggle, isOpen }) => (
  <button 
    onClick={toggle} 
    className="md:hidden -12 h-12 relative flex items-center justify-center"
    aria-label="Menü öffnen"
  >
    <svg viewBox="0 0 23 23" width="23" height="23">
      <Path
        variants={{
          closed: {
            d: 'M 2 2.5 L 20 2.5',
            stroke: CLOSED,
            transition: { delay: 0.1 }
          },
          open: {
            d: 'M 3 16.5 L 17 2.5',
            stroke: OPEN,
          }
        }}
        transition={{
          d: { duration: 0.4, ease: 'easeInOut' },
          stroke: { duration: 0.25, ease: 'linear' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: {
            opacity: 1,
            stroke: CLOSED,
            transition: { delay: 0.1 }
          },
          open: {
            opacity: 0,
            stroke: OPEN,
          }
        }}
        transition={{
          opacity: { duration: 0.12, ease: 'linear' },
          stroke: { duration: 0.25, ease: 'linear' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      />
      <Path
        variants={{
          closed: {
            d: 'M 2 16.346 L 20 16.346',
            stroke: CLOSED,
            transition: { delay: 0.1 }
          },
          open: {
            d: 'M 3 2.5 L 17 16.346',
            stroke: OPEN,
          }
        }}
        transition={{
          d: { duration: 0.4, ease: 'easeInOut' },
          stroke: { duration: 0.25, ease: 'linear' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      />
    </svg>
  </button>
);