
import Link from 'next/link';

export function Navbar() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-zinc-900/10'>
            <nav className='container mx-auto max-w-7xl flex justify-between items-center p-6 '>
                <Link href="/" className='text-xl font-bold tracking-tight text-zinc-900'>
                CMD<span className='text-zinc-500'> Studios</span>
                </Link>
                <div className='hidden md:flex gap-6 items-center'>
                    <Link href="/services" className="text-zinc-700 hover:text-zinc-900 transition-colors">Services</Link>
                    <Link href="/portfolio" className="text-zinc-700 hover:text-zinc-900 transition-colors">Portfolio</Link>
                    <Link href="/about" className="text-zinc-700 hover:text-zinc-900 transition-colors">Über uns</Link>
                    <Link
                        href="/contact"
                        className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-dark transition-colors"
                    >
                        Kontakt
                    </Link>
                </div>
            </nav>
        </header>
    );
}