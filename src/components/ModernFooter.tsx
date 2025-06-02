'use client';

import { motion } from 'framer-motion';

export default function ModernFooter() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900" />
      
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Sascha Kohler
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Diplomierter Lebens- und Sozialberater, Erfinder der KLARE Methode und approbierter Apotheker 
              mit 20+ Jahren Erfahrung in der menschenzentrierten Beratung.
            </p>
            <div className="text-sm text-gray-500">
              LSB-Einzelunternehmen<br />
              Oberösterreich, Österreich
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-6">Leistungen</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">KLARE Methode</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Einzelcoaching</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Monodramatisches Spiel</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Provokative Methode</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Vorträge & Workshops</li>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-6">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <div className="hover:text-blue-400 transition-colors">
                office@sascha-kohler.at
              </div>
              <div className="hover:text-blue-400 transition-colors">
                +43 (0) 123 456 789
              </div>
              <div>Oberösterreich, Österreich</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500"
        >
          <div className="text-sm">
            © {new Date().getFullYear()} Sascha Kohler. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/impressum" className="hover:text-blue-400 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-blue-400 transition-colors">
              Datenschutz
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
