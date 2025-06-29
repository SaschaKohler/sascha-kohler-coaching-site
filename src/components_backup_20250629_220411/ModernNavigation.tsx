'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Über mich', href: '#qualifications' },
  { name: 'Methoden', href: '#services' },
  { name: 'KLARE Methode', href: '#klare' },
  { name: 'Vorträge', href: '#speaking' },
  { name: 'Kontakt', href: '#contact' },
];

export default function ModernNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sascha Kohler
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        whileHover={{ scale: 1.05 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Termin vereinbaren
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Menü öffnen</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Menü
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="mt-8"
                  >
                    <Link
                      href="#contact"
                      className="block px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white text-center hover:shadow-lg transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Termin vereinbaren
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
