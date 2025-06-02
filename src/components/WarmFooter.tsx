import Link from 'next/link';

export default function WarmFooter() {
  return (
    <footer className="bg-deep-brown text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-lg">&copy; 2025 Sascha Kohler - NLP-Trainer & Mentaltrainer</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-klare-k transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-klare-k transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-klare-k transition-colors">AGB</Link>
            <Link href="https://klare-methode.app" className="hover:text-klare-k transition-colors">KLARE-Methode App</Link>
          </div>
        </div>
        <p className="text-sm text-light-beige text-center italic">
          "Der Klient schafft sich den Raum, um sich selbst wiederzuentdecken"
        </p>
      </div>
    </footer>
  );
}
