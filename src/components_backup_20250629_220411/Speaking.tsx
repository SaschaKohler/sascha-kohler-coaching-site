'use client';

import { motion } from 'framer-motion';
import { 
  PresentationChartLineIcon, 
  EyeIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const speakingTopics = [
  {
    id: 1,
    title: 'Die KLARE Methode erleben',
    description: 'Lernen Sie meine Eigenentwicklung kennen: Ein strukturierter 5-Schritte-Prozess für mehr Kongruenz und Authentizität in allen Lebensbereichen.',
    icon: LightBulbIcon,
    duration: '45-90 Minuten',
    audience: 'Unternehmen, Teams, Führungskräfte'
  },
  {
    id: 2,
    title: 'Der Dialog als Schlüssel zur Selbsterkenntnis',
    description: 'Entdecken Sie die Kraft des philosophischen Dialogs: Wie Sie durch geschickte Fragen zu existentiellen Einsichten gelangen und Ihre eigenen Ressourcen aktivieren.',
    icon: EyeIcon,
    duration: '60-120 Minuten',
    audience: 'Seminare, Workshops, Konferenzen'
  },
  {
    id: 3,
    title: 'Monodrama: Die Bühne des Lebens',
    description: 'Erleben Sie die Kraft des monodramatischen Spiels: Wie Sie durch Rollenwechsel neue Perspektiven gewinnen und verborgene Potentiale entdecken.',
    icon: PresentationChartLineIcon,
    duration: '90-180 Minuten',
    audience: 'Weiterbildungen, Teambuilding'
  }
];

export default function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Vorträge & Workshops</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Inspirierende Vorträge zu bewährten Methoden der Lebens- und Sozialberatung. 
            Ihre Teilnehmer erleben hautnah, wie Dialog, Provokation und monodramatisches Spiel neue Möglichkeiten eröffnen.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {speakingTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <topic.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                {topic.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {topic.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center text-neutral-500">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {topic.duration}
                </div>
                <div className="text-neutral-500">
                  <strong>Zielgruppe:</strong> {topic.audience}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Interessiert an einem Vortrag?</h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Alle Vorträge können individuell an Ihre Bedürfnisse und Zielgruppe angepasst werden. 
            Gerne erstelle ich auch maßgeschneiderte Inhalte für Ihr Event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Vortrag anfragen
            </a>
            <a href="mailto:office@sascha-kohler.at" className="btn-outline">
              Direkt kontaktieren
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { ClockIcon } from '@heroicons/react/24/outline';
