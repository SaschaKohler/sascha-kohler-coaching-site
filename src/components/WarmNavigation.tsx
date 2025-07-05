'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Hilfsfunktion zum Prüfen, ob ein Datum innerhalb der letzten 30 Tage liegt
const isWithinLast30Days = (dateString: string): boolean => {
  const articleDate = new Date(dateString);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return articleDate > thirtyDaysAgo;
};

// Neuesten Blog-Artikel finden
const LATEST_BLOG_POST = {
  date: '2025-07-05', // Heutiges Datum
  slug: 'die-macht-der-selbstwirksamkeit'
};

export default function WarmNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewBadge, setShowNewBadge] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Prüfen, ob der Artikel in den letzten 30 Tagen veröffentlicht wurde
    const isNewArticle = isWithinLast30Days(LATEST_BLOG_POST.date);
    
    // Prüfen, ob der Benutzer den Artikel bereits gelesen hat
    const hasReadArticle = typeof window !== 'undefined' 
      ? localStorage.getItem(`read_${LATEST_BLOG_POST.slug}`) === 'true'
      : false;
    
    setShowNewBadge(isNewArticle && !hasReadArticle);
    
    // Wenn der Benutzer den Blog besucht, als gelesen markieren
    if (pathname === '/blog' || pathname.includes('/blog/')) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`read_${LATEST_BLOG_POST.slug}`, 'true');
      }
      setShowNewBadge(false);
    }
  }, [pathname]);

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
            <li className="relative">
              <NavLink href="/blog">Blog</NavLink>
              {showNewBadge && (
                <span className="absolute -top-2 -right-6 bg-klare-r text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                  Neu
                </span>
              )}
            </li>
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
              <li className="flex items-center">
                <NavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
                {showNewBadge && (
                  <span className="ml-2 bg-klare-r text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                    Neu
                  </span>
                )}
              </li>
              <li><NavLink href="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
