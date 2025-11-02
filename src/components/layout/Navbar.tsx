
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';

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
                    <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-heading)] transition-colors duration-300 ease-in-out z-[100]">
                    CMD<span className='text-[var(--color-text-muted)] transition-colors duration-300 ease-in-out'> Studios</span>
                    </Link>
                    
                    {/* Desktop Links (unverändert) */}
                    <div className='hidden md:flex gap-6 items-center'>
                        <Link href="/services" className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors">Services</Link>
                        <Link href="/portfolio" className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors">Portfolio</Link>
                        <Link href="/about" className="text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors">Über uns</Link>
                        <Link
                            href="/contact"
                            className="contact-button bg-[var(--color-button-bg)] 
                        text-[var(--color-button-text)] 
                        hover:bg-[var(--color-button-hover-bg)] font-semibold px-4 py-2 rounded-md transition-colors"
                        >
                            Kontakt
                        </Link>
                    </div>
                </nav>
            </header>

            {/* 6. Mobile Toggle Button */}
            <motion.div 
                className="md:hidden z-[100]"
                initial="closed" 
                animate={isOpen ? "open" : "closed"}
            >
                <MenuToggle toggle={toggleMenu} />
            </motion.div>
            
            {/* 7. Das Menü selbst (außerhalb des headers) */}
            <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
        </>
    );
}