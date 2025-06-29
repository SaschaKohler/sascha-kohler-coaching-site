'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function WarmNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const NavLink = ({ href, children, onClick, highlight = false }: { 
    href: string; 
    children: React.ReactNode; 
    onClick?: () => void;
    highlight?: boolean;
  }) => (
    <Link 
      href={href} 
      className={`${
        isActive(href) 
          ? 'text-klare-k font-medium' 
          : highlight 
            ? 'text-klare-r hover:text-klare-r/80 font-medium' 
            : 'text-warm-brown hover:text-klare-k'
      } transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-warm-white/95 backdrop-blur-md border-b border-light-beige">
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-serif text-xl font-normal text-dark-brown hover:text-klare-k transition-colors">
            Sascha Kohler
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li><NavLink href="/">Start</NavLink></li>
            <li><NavLink href="/ueber-mich">Über mich</NavLink></li>
            <li><NavLink href="/#methode">Methode</NavLink></li>
            <li><NavLink href="/online-beratung" highlight>Online-Beratung ⭐</NavLink></li>
            <li><NavLink href="/#qualifikationen">Qualifikationen</NavLink></li>
            <li><NavLink href="/blog">Blog</NavLink></li>
            <li><NavLink href="/kontakt">Kontakt</NavLink></li>
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
              <li><NavLink href="/" onClick={() => setIsOpen(false)}>Start</NavLink></li>
              <li><NavLink href="/ueber-mich" onClick={() => setIsOpen(false)}>Über mich</NavLink></li>
              <li><NavLink href="/#methode" onClick={() => setIsOpen(false)}>Methode</NavLink></li>
              <li><NavLink href="/online-beratung" onClick={() => setIsOpen(false)} highlight>Online-Beratung ⭐</NavLink></li>
              <li><NavLink href="/#qualifikationen" onClick={() => setIsOpen(false)}>Qualifikationen</NavLink></li>
              <li><NavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink></li>
              <li><NavLink href="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
