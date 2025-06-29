'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function Contact() {
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
    
    // Hier würde normalerweise die Form-Submission stattfinden
    // Für Demo-Zwecke simulieren wir eine erfolgreiche Submission
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
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto"
          >
            <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Vielen Dank für Ihre Nachricht!</h3>
            <p className="text-neutral-600">
              Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Ich freue mich auf unser Gespräch und darauf, Sie auf Ihrem Weg zu begleiten. 
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Telefon</div>
                    <div className="text-primary-100">+43 (0) 123 456 789</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">E-Mail</div>
                    <div className="text-primary-100">office@sascha-kohler.at</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Standort</div>
                    <div className="text-primary-100">Oberösterreich, Österreich</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h4 className="text-white font-medium mb-2">Sprechzeiten</h4>
                <div className="text-primary-100 text-sm space-y-1">
                  <div>Montag - Freitag: 9:00 - 18:00</div>
                  <div>Termine auch nach Vereinbarung</div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Nachricht senden</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="ihre@email.at"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="+43 (0) 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="einzelcoaching">Einzelcoaching</option>
                    <option value="vortrag">Vortrag anfragen</option>
                    <option value="erstgespraech">Erstgespräch</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Fragen..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
              
              <p className="mt-4 text-xs text-neutral-500 text-center">
                Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
