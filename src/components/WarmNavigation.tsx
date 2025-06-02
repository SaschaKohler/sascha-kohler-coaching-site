'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function WarmNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-warm-white/95 backdrop-blur-md border-b border-light-beige">
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-serif text-xl font-normal text-dark-brown hover:text-klare-k transition-colors">
            Sascha Kohler
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li><Link href="#home" className="text-warm-brown hover:text-klare-k transition-colors">Start</Link></li>
            <li><Link href="#methode" className="text-warm-brown hover:text-klare-k transition-colors">Methode</Link></li>
            <li><Link href="#qualifikationen" className="text-warm-brown hover:text-klare-k transition-colors">Qualifikationen</Link></li>
            <li><Link href="#kontakt" className="text-warm-brown hover:text-klare-k transition-colors">Kontakt</Link></li>
          </ul>

          <button className="md:hidden text-warm-brown" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              <li><Link href="#home" className="block py-2 text-warm-brown hover:text-klare-k transition-colors" onClick={() => setIsOpen(false)}>Start</Link></li>
              <li><Link href="#methode" className="block py-2 text-warm-brown hover:text-klare-k transition-colors" onClick={() => setIsOpen(false)}>Methode</Link></li>
              <li><Link href="#qualifikationen" className="block py-2 text-warm-brown hover:text-klare-k transition-colors" onClick={() => setIsOpen(false)}>Qualifikationen</Link></li>
              <li><Link href="#kontakt" className="block py-2 text-warm-brown hover:text-klare-k transition-colors" onClick={() => setIsOpen(false)}>Kontakt</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
