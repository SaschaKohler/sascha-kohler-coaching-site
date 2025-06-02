'use client';

import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  FaceSmileIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

const specialtyMethods = [
  {
    id: 1,
    title: 'KLARE Methode',
    subtitle: 'Meine Eigenentwicklung',
    description: 'Als Erfinder der KLARE Methode (Klarheit - Lebendigkeit - Ausrichtung - Realisierung - Entfaltung) habe ich ein strukturiertes 5-Schritte-System entwickelt, das Menschen dabei unterstützt, ein kongruentes und authentisches Leben zu führen. Diese Methode wende ich konsequent an und vermittle sie weiter.',
    icon: SparklesIcon,
    benefits: [
      'Strukturierter 5-Schritte-Prozess für Kongruenz',
      'Klarheit über Werte und Ziele gewinnen',
      'Lebendigkeit und Authentizität entwickeln',
      'Nachhaltige Lebensentscheidungen treffen'
    ],
    highlight: true,
    isInvention: true
  },
  {
    id: 2,
    title: 'Monodramatisches Spiel',
    subtitle: 'Die Bühne des Bewusstseins',
    description: 'Eine kraftvolle Methode zur Selbsterkundung, bei der Sie verschiedene Rollen Ihres Lebens spielerisch erforschen. Durch den Wechsel der Perspektiven entdecken Sie neue Facetten Ihrer Persönlichkeit und finden kreative Lösungen für Ihre Herausforderungen.',
    icon: MicrophoneIcon,
    benefits: [
      'Verschiedene Lebensbereiche spielerisch erforschen',
      'Innere Konflikte durch Rollenwechsel verstehen',
      'Kreative Lösungswege entdecken',
      'Emotionale Blockaden lösen'
    ],
    highlight: true,
    isInvention: false
  },
  {
    id: 3,
    title: 'Provokative Methode',
    subtitle: 'Nach Frank Farrelly',
    description: 'Mit Humor und direkter Ansprache durchbrechen wir festgefahrene Denkmuster. Die provokative Methode nutzt paradoxe Interventionen und humorvolle Übertreibungen, um neue Sichtweisen zu ermöglichen und schnelle Veränderungen anzustoßen.',
    icon: FaceSmileIcon,
    benefits: [
      'Festgefahrene Muster humorvoll durchbrechen',
      'Paradoxe Interventionen für neue Perspektiven',
      'Schnelle Erkenntnisse durch direkte Ansprache',
      'Leichtigkeit in schwierige Themen bringen'
    ],
    highlight: true,
    isInvention: false
  }
];

export default function SpecialtyMethods() {
  return (
    <section id="specialty" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meine <span className="text-gradient">Schwerpunkt-Methoden</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Diese bewährten Techniken führen besonders schnell zu nachhaltigen Ergebnissen. 
            Sie alle haben eines gemeinsam: Den Menschen in den Dialog mit sich selbst zu bringen.
          </p>
        </motion.div>

        <div className="space-y-12">
          {specialtyMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${
                method.isInvention
                  ? 'bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 border-2 border-primary-300 shadow-lg'
                  : method.highlight 
                    ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200' 
                    : 'bg-neutral-50'
              } rounded-2xl p-8 md:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Icon & Title */}
                <div className="text-center lg:text-left">
                  <div className={`w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-2xl flex items-center justify-center ${
                    method.highlight ? 'bg-primary-600' : 'bg-neutral-600'
                  }`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    method.isInvention ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm font-medium ${
                    method.isInvention 
                      ? 'text-primary-100' 
                      : method.highlight ? 'text-primary-600' : 'text-neutral-600'
                  }`}>
                    {method.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-1">
                  <p className={`text-neutral-700 leading-relaxed mb-6 ${
                    method.isInvention ? 'text-white' : ''
                  }`}>
                    {method.description}
                  </p>
                  {method.highlight && (
                    <div className="space-y-2">
                      {method.isInvention ? (
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-medium">
                          <SparklesIcon className="w-4 h-4 mr-1" />
                          Meine Eigenentwicklung
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          <SparklesIcon className="w-4 h-4 mr-1" />
                          Schwerpunkt-Methode
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div>
                  <h4 className={`font-semibold mb-4 ${
                    method.isInvention ? 'text-white' : 'text-neutral-900'
                  }`}>
                    Vorteile dieser Methode:
                  </h4>
                  <ul className="space-y-3">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          method.isInvention 
                            ? 'bg-white' 
                            : method.highlight ? 'bg-primary-600' : 'bg-neutral-400'
                        }`} />
                        <span className={`text-sm ${
                          method.isInvention ? 'text-primary-100' : 'text-neutral-600'
                        }`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">
              Erleben Sie diese Methoden selbst
            </h3>
            <p className="mb-6 opacity-90">
              In einem unverbindlichen Erstgespräch erfahren Sie, welche Methode für Ihre 
              aktuelle Situation am besten geeignet ist.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Erstgespräch vereinbaren
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
