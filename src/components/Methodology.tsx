'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const methodPrinciples = [
  {
    id: 1,
    title: 'Dialog im Mittelpunkt',
    description: 'Der Mensch mit seinem eigenen Dialog steht bei mir im Zentrum. Ohne technische Hilfsmittel gebe ich Ihnen den Raum, sich selbst zu verstehen.',
    icon: ChatBubbleBottomCenterTextIcon,
    color: 'primary'
  },
  {
    id: 2,
    title: 'Eigene Fähigkeiten aktivieren',
    description: 'Mein Ziel ist es, Ihnen dabei zu helfen, Ihre vorhandenen Ressourcen wieder bewusst wahrzunehmen und zu nutzen.',
    icon: UserIcon,
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Schnell wirksame Methoden',
    description: 'Monodramatisches Spiel und provokative Ansätze führen oft überraschend schnell zu nachhaltigen Veränderungen.',
    icon: SparklesIcon,
    color: 'primary'
  },
  {
    id: 4,
    title: 'WKO-Methodenkatalog',
    description: 'Alle meine Methoden basieren auf dem offiziellen Methodenkatalog der Wirtschaftskammer für Lebens- und Sozialberater.',
    icon: ShieldCheckIcon,
    color: 'secondary'
  }
];

const orientations = [
  {
    name: 'Tiefenpsychologisch-psychodynamisch',
    description: 'Unbewusste Prozesse bewusst machen',
    approach: 'Prozessorientiert'
  },
  {
    name: 'Humanistisch-existentiell', 
    description: 'Selbstverwirklichung und Entwicklungspotential',
    approach: 'Prozessorientiert'
  },
  {
    name: 'Systemisch-soziodynamisch',
    description: 'Soziale Systeme und Beziehungen',
    approach: 'Zielorientiert'
  },
  {
    name: 'Verhaltensmodifizierend',
    description: 'Lernprozesse und Verhaltensänderung',
    approach: 'Zielorientiert'
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mein <span className="text-gradient">methodischer Ansatz</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Basierend auf dem WKO-Methodenkatalog arbeite ich mit bewährten Techniken aus allen vier psychologischen 
            Grundorientierungen - immer mit dem Ziel, Ihre eigenen Fähigkeiten wieder zugänglich zu machen.
          </p>
        </motion.div>

        {/* Grundprinzipien */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {methodPrinciples.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  principle.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'
                }`}>
                  <principle.icon className={`w-6 h-6 ${
                    principle.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vier Orientierungen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Vier psychologische Grundorientierungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orientations.map((orientation, index) => (
              <div key={index} className="border border-neutral-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900">
                    {orientation.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    orientation.approach === 'Prozessorientiert' 
                      ? 'bg-primary-100 text-primary-700' 
                      : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {orientation.approach}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">
                  {orientation.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
            <p className="text-sm text-neutral-600 text-center">
              <strong>Philosophischer Dialog</strong> und <strong>psychologische Beratung</strong> bilden 
              die Grundlage aller meiner Methoden nach dem offiziellen WKO-Methodenkatalog.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
