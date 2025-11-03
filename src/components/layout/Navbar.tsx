
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';
import { HoverStaggeredLink } from '../ui/HoverStaggeredLink';
import { MagneticLink } from '../ui/MagneticLink';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[var(--color-navbar-border)] transition-colors duration-300 ease-in-out">
                <nav className="container mx-auto max-w-7xl flex justify-between items-center p-6">
                    <Link href="/" className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-500 transition-colors duration-300 ease-in-out z-[100]">
                    CMD<span className='text-[var(--color-text-muted)] transition-colors duration-300 ease-in-out'> Studios</span>
                    </Link>
                    
                    {/* Desktop Links (unverändert) */}
                    <div className='hidden md:flex gap-6 items-center'>
                        <HoverStaggeredLink 
                            href="/services" 
                            title="Services"
                            className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors"
                        />
                        <HoverStaggeredLink 
                            href="/portfolio" 
                            title="Portfolio"
                            className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors"
                        />
                        <HoverStaggeredLink 
                            href="/about" 
                            title="Über uns"
                            className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors"
                        />
                        <MagneticLink
                            href="/contact"
                            className="contact-button bg-[var(--color-button-bg)] 
                        text-[var(--color-button-text)] 
                        hover:bg-[var(--color-button-hover-bg)] font-semibold px-4 py-2 rounded-md transition-colors"
                        >
                            Kontakt
                        </MagneticLink>
                    </div>
                </nav>
            </header>

            {/* 6. Mobile Toggle Button */}
            <motion.div 
                className="md:hidden fixed top-0 right-0 z-[100] m-4 mt-4"
                initial="closed" 
                animate={isOpen ? "open" : "closed"}
            >
                <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
            </motion.div>
            
            {/* 7. Das Menü selbst (außerhalb des headers) */}
            <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
        </>
    );
}