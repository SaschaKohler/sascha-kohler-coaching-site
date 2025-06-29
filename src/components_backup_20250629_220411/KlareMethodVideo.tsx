import React, { useState } from 'react';
import Image from 'next/image';

export default function KlareMethodVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-dark-brown">
            Die KLARE-Methode erklärt
          </h2>
          <p className="text-lg text-warm-brown max-w-3xl mx-auto leading-relaxed">
            Erleben Sie die KLARE-Methode aus erster Hand. In diesem Video erkläre ich Ihnen 
            persönlich, wie Sie durch die fünf Schritte zu mehr Klarheit und Kongruenz finden.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative bg-dark-brown rounded-2xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              /* Video Thumbnail */
              <div className="relative aspect-video cursor-pointer group" onClick={() => setShowVideo(true)}>
                <Image
                  src="/images/Vortrag.JPG"
                  alt="KLARE-Methode Video - Klicken zum Abspielen"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 bg-klare-r rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  🎥 Video: KLARE-Methode Einführung
                </div>
              </div>
            ) : (
              /* Actual Video */
              <div className="aspect-video">
                <video 
                  controls 
                  autoPlay
                  className="w-full h-full"
                  preload="metadata"
                >
                  <source src="/images/Kongruenz 23.mp4" type="video/mp4" />
                  Ihr Browser unterstützt keine HTML5-Videos.
                </video>
              </div>
            )}
          </div>

          {/* Video Beschreibung */}
          <div className="mt-8 text-center">
            <p className="text-warm-brown mb-4">
              🎥 <strong>Persönliche Einführung</strong> in die KLARE-Methode
            </p>
            <p className="text-sm text-warm-brown/70 mb-6">
              In diesem Video erfahren Sie, wie K-larheit, L-ebendigkeit, A-usrichtung, 
              R-ealisierung und E-ntfaltung zusammenwirken, um Sie zu Ihrem authentischen Selbst zu führen.
            </p>
            
            {/* Alternative: Direct Contact */}
            <div className="bg-klare-r/10 p-6 rounded-lg">
              <h3 className="font-semibold text-dark-brown mb-3">
                Lieber persönlich sprechen?
              </h3>
              <p className="text-warm-brown mb-4">
                Statt Video schauen - wie wäre es mit einem direkten Gespräch? 
                In 30 Minuten erkläre ich Ihnen persönlich die KLARE-Methode.
              </p>
              <a
                href="https://calendar.app.google/6Tp1TGMBSR8cm5tX6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-klare-r text-warm-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-klare-r/90 hover:shadow-lg transform hover:-translate-y-1"
              >
                Kostenloses Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
