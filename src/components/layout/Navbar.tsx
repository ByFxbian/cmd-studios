
import Link from 'next/link';

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[var(--color-navbar-border)]">
            <nav className="container mx-auto max-w-7xl flex justify-between items-center p-6">
                <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-heading)]">
                CMD<span className='text-[var(--color-text-muted)]'> Studios</span>
                </Link>
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
    );
}