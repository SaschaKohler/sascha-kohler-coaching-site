'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  StarIcon, 
  ClockIcon,
  UserIcon 
} from '@heroicons/react/24/outline';

const qualifications = [
  {
    id: 1,
    title: 'Erfinder der KLARE Methode',
    institution: 'Eigenentwicklung',
    year: 'Seit 2020',
    description: 'Entwicklung und kontinuierliche Weiterentwicklung der KLARE Methode (Klarheit - Lebendigkeit - Ausrichtung - Realisierung - Entfaltung) für kongruentes und authentisches Leben.',
    icon: AcademicCapIcon,
    highlight: true
  },
  {
    id: 2,
    title: 'Diplomierter Lebens- und Sozialberater',
    institution: 'Österreichische Akademie',
    year: 'September 2024',
    description: 'Vollständige Ausbildung in psychosozialer Beratung mit Schwerpunkt auf systemische Beratungsansätze und Krisenintervention.',
    icon: StarIcon,
    highlight: false
  },
  {
    id: 3,
    title: 'NLP Trainer & Coach Zertifizierung',
    institution: 'Internationale NLP Akademie',
    year: '2023',
    description: 'Umfassende Ausbildung in Neurolinguistischem Programmieren mit zahlreichen Stunden als Co-Trainer in der Praxis.',
    icon: UserIcon,
    highlight: false
  },
  {
    id: 4,
    title: 'Pharmazeut (Approbation)',
    institution: 'Freie Universität Berlin',
    year: 'Seit 2003',
    description: 'Pharmaziestudium in Berlin mit Approbation zum Apotheker seit 2003. Fast 20 Jahre praktische Erfahrung in der direkten Beratung und Betreuung von Menschen.',
    icon: ClockIcon,
    highlight: false
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meine <span className="text-gradient">Qualifikationen</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Eine einzigartige Kombination aus akademischer Ausbildung, praktischer Erfahrung 
            und kontinuierlicher Weiterbildung bildet das Fundament meiner Beratungstätigkeit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={qualification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-8 ${
                qualification.highlight 
                  ? 'ring-2 ring-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50' 
                  : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    qualification.highlight 
                      ? 'bg-primary-600' 
                      : 'bg-neutral-100'
                  }`}>
                    <qualification.icon className={`w-6 h-6 ${
                      qualification.highlight 
                        ? 'text-white' 
                        : 'text-neutral-600'
                    }`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600">
                      {qualification.year}
                    </span>
                    {qualification.highlight && (
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                        Eigenentwicklung
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                    {qualification.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {qualification.institution}
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    {qualification.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
