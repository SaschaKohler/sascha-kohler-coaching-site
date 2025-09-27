export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sascha Kohler</h3>
            <p className="text-neutral-400 mb-4">
              Diplomierter Lebens- und Sozialberater, Erfinder der KLARE Methode
              und approbierter Apotheker mit 20+ Jahren Erfahrung in der
              menschenzentrierten Beratung.
            </p>
            <div className="text-sm text-neutral-500">
              Mentaltrainer-Einzelunternehmen
              <br />
              Österreich
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Einzelcoaching</li>
              <li>Motivation & Zielerreichung</li>
              <li>Lebenswandel & Veränderung</li>
              <li>Selbstfürsorge & Balance</li>
              <li>Vorträge & Workshops</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>office@sascha-kohler.at</div>
              <div>+43 (0) 123 456 789</div>
              <div>Oberösterreich, Österreich</div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <div>
            © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
            vorbehalten.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
