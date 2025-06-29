import React from 'react';
import Image from 'next/image';

export default function PersonalGallery() {
  const images = [
    {
      src: '/images/sascha-kohler-portrait.jpg',
      alt: 'Sascha Kohler - Professionelles Porträt',
      title: 'Mentaltrainer & Coach'
    },
    {
      src: '/images/sascha-kohler-vortrag.jpg', 
      alt: 'Sascha Kohler bei einem Vortrag',
      title: 'Vortragstätigkeit'
    },
    {
      src: '/images/coaching-walk-nature-1.jpg',
      alt: 'Sascha Kohler beim Walk & Talk Coaching in der Natur',
      title: 'Walk & Talk Coaching'
    },
    {
      src: '/images/coaching-outdoor-3.jpg',
      alt: 'Sascha Kohler - Coaching in entspannter Atmosphäre', 
      title: 'Entspannte Atmosphäre'
    }
  ];

  return (
    <section className="py-16 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-dark-brown">
            Einblicke in meine Arbeit
          </h2>
          <p className="text-lg text-warm-brown max-w-2xl mx-auto leading-relaxed">
            Als Ihr Begleiter auf dem Weg zu mehr Klarheit und mentaler Stärke teile ich 
            gerne persönliche Einblicke in meine Arbeitsweise mit Ihnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-dark-brown text-center">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-warm-brown mb-6 leading-relaxed max-w-3xl mx-auto">
            Diese Bilder zeigen verschiedene Facetten meiner Arbeit als Mentaltrainer und Coach. 
            Von professionellen Vorträgen bis hin zu persönlichen Gesprächen in der Natur - 
            ich schaffe den Raum, in dem Sie sich selbst neu entdecken können.
          </p>
          <a
            href="https://calendar.app.google/6Tp1TGMBSR8cm5tX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-klare-r text-warm-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90"
          >
            Lernen Sie mich persönlich kennen
          </a>
        </div>
      </div>
    </section>
  );
}