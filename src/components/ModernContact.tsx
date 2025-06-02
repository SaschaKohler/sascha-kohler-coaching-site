'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-green-500/30 rounded-3xl p-12">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircleIcon className="w-20 h-20 text-green-400 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Vielen Dank für Ihre Nachricht!</h3>
              <p className="text-gray-300 text-lg">
                Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Kontakt</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lassen Sie uns{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              sprechen
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ich freue mich auf unser Gespräch und darauf, Sie auf Ihrem Weg zu begleiten. 
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PhoneIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefon</div>
                    <div className="text-gray-300">+43 (0) 123 456 789</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <EnvelopeIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">E-Mail</div>
                    <div className="text-gray-300">office@sascha-kohler.at</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPinIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Standort</div>
                    <div className="text-gray-300">Oberösterreich, Österreich</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                <h4 className="text-white font-semibold mb-3">Sprechzeiten</h4>
                <div className="text-gray-300 space-y-1">
                  <div>Montag - Freitag: 9:00 - 18:00</div>
                  <div>Termine auch nach Vereinbarung</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Nachricht senden</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="ihre@email.at"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+43 (0) 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-slate-800">Bitte wählen...</option>
                    <option value="klare-methode" className="bg-slate-800">KLARE Methode</option>
                    <option value="einzelcoaching" className="bg-slate-800">Einzelcoaching</option>
                    <option value="vortrag" className="bg-slate-800">Vortrag anfragen</option>
                    <option value="erstgespraech" className="bg-slate-800">Erstgespräch</option>
                    <option value="sonstiges" className="bg-slate-800">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Fragen..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Wird gesendet...
                  </div>
                ) : (
                  'Nachricht senden'
                )}
              </motion.button>
              
              <p className="mt-4 text-xs text-gray-400 text-center">
                Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
