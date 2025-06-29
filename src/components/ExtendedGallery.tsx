import React from 'react';
import Image from 'next/image';

export default function ExtendedGallery() {
  const galleryImages = [
    {
      category: "Coaching & Beratung",
      images: [
        {
          src: '/images/sascha-kohler-portrait.jpg',
          alt: 'Sascha Kohler - Ihr Mentaltrainer',
          caption: 'Professionelle Begleitung auf Augenhöhe'
        },
        {
          src: '/images/sascha-kohler-coaching-session.jpg',
          alt: 'Sascha Kohler in einer Coaching-Session',
          caption: 'Individuelle Betreuung'
        }
      ]
    },
    {
      category: "Walk & Talk - Coaching in Bewegung",
      images: [
        {
          src: '/images/coaching-walk-nature-1.jpg',
          alt: 'Walk & Talk Coaching in der Natur',
          caption: 'Neue Perspektiven beim Gehen'
        },
        {
          src: '/images/coaching-walk-nature-2.jpg',
          alt: 'Coaching beim Spaziergang',
          caption: 'Bewegung fördert Kreativität'
        },
        {
          src: '/images/coaching-outdoor-1.jpg',
          alt: 'Outdoor Coaching Session',
          caption: 'Natur als Coaching-Raum'
        }
      ]
    },
    {
      category: "Vorträge & Workshops",
      images: [
        {
          src: '/images/sascha-kohler-vortrag.jpg',
          alt: 'Sascha Kohler bei einem Vortrag',
          caption: 'Inspirierende Impulse'
        },
        {
          src: '/images/coaching-outdoor-3.jpg',
          alt: 'Workshop in entspannter Atmosphäre',
          caption: 'Lernen in angenehmer Umgebung'
        }
      ]
    },
    {
      category: "Sport & mentale Stärke",
      images: [
        {
          src: '/images/sport-cycling-1.jpg',
          alt: 'Mentale Stärke im Sport',
          caption: 'Sportmentaltraining'
        },
        {
          src: '/images/sport-activity-1.jpg',
          alt: 'Aktiv und mental stark',
          caption: 'Körper und Geist im Einklang'
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-dark-brown">
            Meine Arbeit in Bildern
          </h2>
          <p className="text-lg text-warm-brown max-w-3xl mx-auto leading-relaxed">
            Jeder Mensch ist einzigartig - und so ist auch meine Herangehensweise. 
            Ob im persönlichen Gespräch, beim Walk & Talk in der Natur oder bei 
            inspirierenden Vorträgen - ich passe mich Ihren Bedürfnissen an.
          </p>
        </div>

        {galleryImages.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h3 className="font-serif text-2xl font-light mb-8 text-dark-brown text-center">
              {section.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <div key={imageIndex} className="group">
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-warm-brown text-center">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <p className="text-warm-brown mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            "Die beste Zeit für Veränderung ist jetzt. Lassen Sie uns gemeinsam 
            Ihren Weg zu mehr Klarheit und mentaler Stärke beginnen."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/6Tp1TGMBSR8cm5tX6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-klare-r text-warm-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90"
            >
              Kostenloses Erstgespräch
            </a>
            <a
              href="/kontakt"
              className="inline-block bg-transparent text-klare-r px-6 py-3 rounded-lg font-medium border-2 border-klare-r hover:bg-klare-r hover:text-warm-white transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}