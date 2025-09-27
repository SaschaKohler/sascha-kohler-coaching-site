import Link from 'next/link';

export default function WarmFooter() {
  return (
    <footer className="bg-deep-brown text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-klare-k transition-colors">Start</Link></li>
              <li><Link href="/ueber-mich" className="hover:text-klare-k transition-colors">Über mich</Link></li>
              <li><Link href="/blog" className="hover:text-klare-k transition-colors">Blog</Link></li>
              <li><Link href="/kontakt" className="hover:text-klare-k transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:text-klare-k transition-colors">Einzelcoaching</Link></li>
              <li><Link href="/#methode" className="hover:text-klare-k transition-colors">KLARE-Methode</Link></li>
              <li><Link href="/online-beratung" className="hover:text-klare-k transition-colors">Online-Beratung</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-klare-k transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-klare-k transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-klare-k transition-colors">AGB</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">KLARE-Methode</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://klare-methode.app" className="hover:text-klare-k transition-colors">KLARE App</Link></li>
              <li><Link href="/blog/die-klare-methode-vorstellung" className="hover:text-klare-k transition-colors">Mehr erfahren</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Ja zum Leben</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ja-zum-leben" className="hover:text-klare-k transition-colors">Projektübersicht</Link></li>
              <li>
                <Link
                  href="https://ja-zum-leben.at"
                  className="hover:text-klare-k transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Externe Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://magazin.ja-zum-leben.at"
                  className="hover:text-klare-k transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magazin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-warm-brown">
                    <p className="text-sm">&copy; 2025 Sascha Kohler - Mensch und Mentaltrainer</p>
          <p className="text-xs text-light-beige mt-2 md:mt-0">
            Schwertberg, Oberösterreich | Online-Beratung österreichweit
          </p>
        </div>
        <p className="text-sm text-light-beige text-center italic">
          "Der Klient schafft sich den Raum, um sich selbst wiederzuentdecken"
        </p>
      </div>
    </footer>
  );
}
