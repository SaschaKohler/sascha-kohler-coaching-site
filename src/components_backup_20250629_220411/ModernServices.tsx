'use client';

import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: 'KLARE Methode',
    subtitle: 'Meine Eigenentwicklung',
    description: 'Ein strukturiertes 5-Schritte-System für kongruentes Leben: Klarheit - Lebendigkeit - Ausrichtung - Realisierung - Entfaltung.',
    icon: SparklesIcon,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Kongruenz entwickeln', 'Authentizität leben', 'Klarheit gewinnen', 'Potentiale entfalten']
  },
  {
    id: 2,
    title: 'Dialog & Bewusstwerdung',
    subtitle: 'Philosophischer Ansatz',
    description: 'Im Mittelpunkt steht der Mensch mit seinem eigenen Dialog. Durch geschickte Fragen zu existentiellen Einsichten.',
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Philosophischer Dialog', 'Bewusstwerdung', 'Selbsterfahrung', 'Ressourcen aktivieren']
  },
  {
    id: 3,
    title: 'Monodramatisches Spiel',
    subtitle: 'Kreative Selbsterkundung',
    description: 'Durch Rollenwechsel neue Perspektiven gewinnen und verborgene Potentiale in einem sicheren Rahmen entdecken.',
    icon: UserIcon,
    gradient: 'from-pink-500 to-orange-500',
    features: ['Perspektivenwechsel', 'Rollenspiel', 'Emotionale Integration', 'Kreative Lösungen']
  },
  {
    id: 4,
    title: 'Provokative Methode',
    subtitle: 'Nach Frank Farrelly',
    description: 'Mit Humor und direkter Ansprache festgefahrene Denkmuster durchbrechen und schnelle Veränderungen anstoßen.',
    icon: ShieldCheckIcon,
    gradient: 'from-orange-500 to-red-500',
    features: ['Humor als Werkzeug', 'Musterdurchbrechung', 'Paradoxe Interventionen', 'Schnelle Erkenntnisse']
  }
];

export default function ModernServices() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%),
                           radial-gradient(circle at 75% 25%, #EC4899 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Beratungsmethoden</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meine{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Methoden
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Basierend auf dem WKO-Methodenkatalog arbeite ich mit bewährten Techniken, 
            die schnell zum Erfolg führen. Der Dialog steht im Mittelpunkt.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-500">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    {service.id === 1 && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium text-white"
                      >
                        Eigenentwicklung
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-blue-300 text-sm font-medium mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 opacity-80`} />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bereit für Ihre Transformation?
            </h3>
            <p className="text-gray-300 mb-6">
              Entdecken Sie, welche Methode für Ihre aktuelle Situation am besten geeignet ist.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Erstgespräch vereinbaren
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
