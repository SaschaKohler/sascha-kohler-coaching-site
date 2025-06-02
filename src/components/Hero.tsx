'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <div className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-2">
              Seit September 2024
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Diplomierter{' '}
              <span className="text-gradient">Lebens- & Sozialberater</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-neutral-600 font-normal">
                & Erfinder der KLARE Methode
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              Als Erfinder der <strong>KLARE Methode</strong> und mit über 20 Jahren Erfahrung als approbierter Apotheker 
              begleite ich Sie dabei, <strong>Ihre eigenen Fähigkeiten wieder bewusst wahrzunehmen</strong> und in den Alltag zu integrieren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Beratungstermin vereinbaren
              </a>
              <a href="#services" className="btn-outline">
                Meine Methoden
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-200">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary-600">KLARE</div>
                <div className="text-sm text-neutral-600">Methode Erfinder</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-neutral-600">Jahre Apotheker</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary-600">2024</div>
                <div className="text-sm text-neutral-600">Dipl. LSB</div>
              </div>
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sascha Kohler - Lebens- und Sozialberater"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-100"
            >
              <div className="text-sm text-neutral-600 mb-1">Nächster freier Termin</div>
              <div className="text-lg font-semibold text-neutral-900">Diese Woche verfügbar</div>
              <div className="text-xs text-primary-600 font-medium mt-1">→ Jetzt anfragen</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-primary-600" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
}
