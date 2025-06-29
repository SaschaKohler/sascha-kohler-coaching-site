'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Fehler zurücksetzen wenn User tippt
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: null }));
    }
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({
      isLoading: true,
      isSuccess: false,
      error: null
    });

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({
          isLoading: false,
          isSuccess: true,
          error: null
        });
        
        // Form zurücksetzen
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Success Message nach 5 Sekunden ausblenden
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSuccess: false }));
        }, 5000);

      } else {
        setFormState({
          isLoading: false,
          isSuccess: false,
          error: result.error || 'Ein Fehler ist aufgetreten'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: 'Verbindungsfehler. Bitte versuchen Sie es erneut.'
      });
    }
  };  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Success Message */}
        {formState.isSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Nachricht erfolgreich gesendet!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formState.error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Fehler beim Senden
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{formState.error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-warm-brown mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-warm-brown/20 rounded-lg focus:ring-2 focus:ring-klare-k/50 focus:border-klare-k transition-colors"
            placeholder="Ihr vollständiger Name"
          />
        </div>        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-brown mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-warm-brown/20 rounded-lg focus:ring-2 focus:ring-klare-k/50 focus:border-klare-k transition-colors"
            placeholder="ihre@email.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-warm-brown mb-2">
            Telefon (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-warm-brown/20 rounded-lg focus:ring-2 focus:ring-klare-k/50 focus:border-klare-k transition-colors"
            placeholder="+43 123 456 789"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-warm-brown mb-2">
            Betreff
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-warm-brown/20 rounded-lg focus:ring-2 focus:ring-klare-k/50 focus:border-klare-k transition-colors"
          >
            <option value="">Bitte wählen Sie einen Betreff</option>
            <option value="Erstberatung">Kostenloses Erstgespräch</option>
            <option value="Einzelcoaching">Einzelcoaching Anfrage</option>
            <option value="Online-Beratung">Online-Beratung</option>
            <option value="Mentaltraining">Mentaltraining</option>
            <option value="KLARE-Methode">KLARE-Methode</option>
            <option value="Workshops">Workshops & Seminare</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-warm-brown mb-2">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-warm-brown/20 rounded-lg focus:ring-2 focus:ring-klare-k/50 focus:border-klare-k transition-colors resize-vertical"
            placeholder="Beschreiben Sie kurz, womit ich Ihnen helfen kann..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={formState.isLoading}
            className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
              formState.isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-klare-k to-klare-r hover:from-klare-k/90 hover:to-klare-r/90 hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            {formState.isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Nachricht wird gesendet...
              </div>
            ) : (
              'Nachricht senden'
            )}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="text-sm text-gray-600 text-center">
          <p>
            Ihre Daten werden vertraulich behandelt und nur für die Bearbeitung Ihrer Anfrage verwendet.
            <br />
            Weitere Informationen finden Sie in der{' '}
            <a href="/datenschutz" className="text-klare-k hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
