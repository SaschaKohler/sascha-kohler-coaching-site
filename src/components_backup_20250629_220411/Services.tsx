'use client';

import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: 'Dialog & Bewusstwerdung',
    description: 'Im Mittelpunkt steht der Mensch mit seinem eigenen Dialog. Durch geschickte Fragen helfe ich Ihnen dabei, Ihre eigenen Fähigkeiten wieder bewusst wahrzunehmen und zu verstehen.',
    icon: LightBulbIcon,
    features: ['Philosophischer Dialog', 'Bewusstwerdung eigener Ressourcen', 'Selbsterfahrung', 'Existentielle Einsichten']
  },
  {
    id: 2,
    title: 'Monodramatisches Spiel',
    description: 'Eine kraftvolle Methode zur Selbsterkundung: Durch das Spiel verschiedener Rollen entdecken Sie neue Perspektiven und Lösungswege für Ihre Lebensthemen.',
    icon: UserGroupIcon,
    features: ['Rollenspiel & Perspektivenwechsel', 'Innere Anteile erforschen', 'Kreative Lösungsfindung', 'Emotionale Integration']
  },
  {
    id: 3,
    title: 'Provokative Methode',
    description: 'Nach Frank Farrelly: Mit humorvollem und direktem Ansatz durchbrechen wir festgefahrene Denkmuster und öffnen neue Wege zur Veränderung.',
    icon: HeartIcon,
    features: ['Humor als Heilkraft', 'Musterdurchbrechung', 'Direkte Intervention', 'Schnelle Erkenntnisse']
  },
  {
    id: 4,
    title: 'Alle vier Beratungsrichtungen',
    description: 'Je nach Ihrem Bedarf nutze ich Methoden aus allen Orientierungen des WKO-Methodenkatalogs: tiefenpsychologisch, humanistisch, systemisch und verhaltensmodifizierend.',
    icon: ShieldCheckIcon,
    features: ['Tiefenpsychologische Ansätze', 'Humanistisch-existentielle Methoden', 'Systemische Betrachtung', 'Verhaltensmodifikation']
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meine <span className="text-gradient">Beratungsmethoden</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Auf Basis des offiziellen WKO-Methodenkatalogs für Lebens- und Sozialberater arbeite ich mit bewährten Methoden, 
            die schnell zum Erfolg führen. Im Mittelpunkt steht immer der Dialog - ohne technische Hilfsmittel.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Mein Beratungsansatz</h3>
            <p className="text-neutral-600 mb-6">
              Mein Ziel ist es, Ihnen dabei zu helfen, Ihre eigenen Fähigkeiten wieder bewusst wahrzunehmen 
              und diese bewusst in Ihren Lebensalltag zu integrieren. Der Dialog steht im Mittelpunkt - 
              Sie geben sich selbst wieder den Raum, um sich zu verstehen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Ersttermin vereinbaren
              </a>
              <a href="#qualifications" className="btn-outline">
                Meine Qualifikationen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
