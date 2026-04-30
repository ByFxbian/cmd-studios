'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent,  type Variants } from 'framer-motion';
import { MagneticLink } from '../ui/MagneticLink';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;
        const isScrollingDown = diff > 0;
        
        if (latest > 150 && isScrollingDown) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        lastScrollY.current = latest;
    });

    const toggleMenu = () => setIsOpen(!isOpen);

    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setIsOpen(false);
    }

    const containerVariants: Variants = {
        idle: {
            width: "170px",
            height: "50px",
            borderRadius: "9999px",
            backgroundColor: "rgba(249, 248, 244, 0.6)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(28, 27, 26, 0.08)",
            transition: { duration: 0.5, type: "spring", stiffness: 200, damping: 20 }
        },
        expanded: {
            width: "610px", 
            height: "58px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(24px)", 
            borderColor: "rgba(28, 27, 26, 0.1)",
            transition: { duration: 0.5, type: "spring", stiffness: 200, damping: 20 }
        },
        hidden: {
            y: "-150%",
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" }
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    const navItems = [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <motion.header
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center justify-center pointer-events-auto overflow-hidden shadow-2xl"
                initial="visible"
                animate={[
                    isHidden && !isHovered ? "hidden" : "visible",
                    (isScrolled && !isHovered) ? "idle" : "expanded"
                ]}
                variants={containerVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                    borderWidth: '1px',
                    borderStyle: 'solid',
                }}
            >
                <nav className="flex items-center justify-between w-full px-2 h-full gap-2 whitespace-nowrap">
                    
                    <div className="flex-shrink-0 pl-4 pr-2">
                        <Link href="/" className="font-bold text-[var(--color-heading)] tracking-normal text-xl md:text-2xl flex items-center gap-1">
                            CMD<span className={`${isScrolled && !isHovered ? 'hidden' : 'inline-block'} text-[var(--color-text-muted)] font-normal transition-all duration-300`}>Studios</span>
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-center overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            {(!isScrolled || isHovered) && (
                                <motion.div 
                                    className="flex items-center gap-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    {navItems.map((item) => (
                                        <Link 
                                            key={item.path} 
                                            href={item.path}
                                            className="relative px-4 py-2 text-sm md:text-base text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors"
                                        >
                                            {item.name}
                                            {pathname === item.path && (
                                                <motion.div
                                                    layoutId="nav-pill"
                                                    className="absolute inset-0 bg-black/5 rounded-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="pr-1 flex-shrink-0">
                        <MagneticLink
                            href="/contact"
                            layout
                            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                            className={`flex items-center justify-center rounded-full transition-colors duration-300 ${(!isScrolled || isHovered)
                                    ? 'bg-[var(--color-heading)] text-[var(--color-page-bg)] px-6 py-2.5 font-medium text-sm md:text-base hover:opacity-90' 
                                    : 'w-10 h-10 bg-[var(--color-heading)] text-[var(--color-page-bg)] p-0 hover:scale-110'} 
                            `}
                        >
                            {(!isScrolled || isHovered) ? "Kontakt" : <span className="text-xs">👋</span>}
                        </MagneticLink>
                    </div>

                </nav>
            </motion.header>

            <div className="md:hidden fixed top-0 w-full z-[201] px-4 py-4 flex justify-between items-center pointer-events-none">
                <Link href="/" className={`text-xl font-bold pointer-events-auto z-[202] transition-colors duration-300 ${isOpen ? 'text-white' : 'text-accent'}`} onClick={() => isOpen && toggleMenu()}>
                    CMD <span className={`font-normal transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-900'}`}>Studios</span>
                </Link>
                
                <motion.div 
                    className="pointer-events-auto z-[202] relative" 
                    initial="closed" 
                    animate={isOpen ? "open" : "closed"}
                >
                     <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
                </motion.div>
            </div>
            
            <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
        </>
    );
}