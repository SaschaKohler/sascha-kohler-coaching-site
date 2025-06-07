"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  EyeIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const klareSteps = [
  {
    id: 1,
    letter: "K",
    title: "Klarheit",
    subtitle: "Bewusste Wahrnehmung",
    description:
      "Erkennen Sie klar, wo Sie stehen und was wirklich wichtig für Sie ist. Klarheit über Ihre Werte, Ziele und aktuellen Lebensumstände.",
    icon: EyeIcon,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    letter: "L",
    title: "Lebendigkeit",
    subtitle: "Authentische Energie",
    description:
      "Spüren Sie Ihre natürliche Lebenskraft und bringen Sie Ihre authentische Persönlichkeit zum Ausdruck.",
    icon: HeartIcon,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    letter: "A",
    title: "Ausrichtung",
    subtitle: "Klare Richtung",
    description:
      "Richten Sie Ihr Leben nach Ihren wahren Werten und Zielen aus. Finden Sie Ihre persönliche Mission.",
    icon: LightBulbIcon,
    color: "from-pink-500 to-orange-500",
    borderColor: "border-pink-500/30",
  },
  {
    id: 4,
    letter: "R",
    title: "Realisierung",
    subtitle: "Konkrete Umsetzung",
    description:
      "Setzen Sie Ihre Erkenntnisse in konkrete Handlungen um. Schaffen Sie messbare Veränderungen in Ihrem Leben.",
    icon: RocketLaunchIcon,
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
  },
  {
    id: 5,
    letter: "E",
    title: "Entfaltung",
    subtitle: "Vollendete Entwicklung",
    description:
      "Entfalten Sie Ihr volles Potenzial und leben Sie ein kongruentes, authentisches Leben in allen Bereichen.",
    icon: SparklesIcon,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
  },
];

export default function KlareMethod() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="klare"
      className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-8"
          >
            <SparklesIcon className="w-6 h-6 text-blue-400 mr-3" />
            <span className="text-blue-300 font-semibold text-lg">
              Meine Eigenentwicklung
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Die{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              KLARE
            </span>{" "}
            Methode
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ein strukturiertes 5-Schritte-System für ein kongruentes und
            authentisches Leben. Entwickelt aus jahrelanger Erfahrung in der
            Lebens- und Sozialberatung.
          </p>
        </motion.div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {klareSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer transition-all duration-500 ${
                    activeStep === step.id ? "scale-105" : "hover:scale-102"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div
                    className={`relative bg-white/5 backdrop-blur-xl border ${
                      activeStep === step.id
                        ? step.borderColor
                        : "border-white/10"
                    } rounded-2xl p-6 hover:bg-white/10 transition-all duration-300`}
                  >
                    {/* Step Number Circle */}
                    <div className="flex items-start space-x-4">
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center font-bold text-white text-xl flex-shrink-0 font-sans`}
                      >
                        {step.letter}
                        {activeStep === step.id && (
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-2xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                            activeStep === step.id
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm font-medium mb-3 transition-colors duration-300 ${
                            activeStep === step.id
                              ? "text-blue-300"
                              : "text-gray-500"
                          }`}
                        >
                          {step.subtitle}
                        </p>
                        <p
                          className={`leading-relaxed transition-colors duration-300 ${
                            activeStep === step.id
                              ? "text-gray-200"
                              : "text-gray-400"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Line */}
                    {index < klareSteps.length - 1 && (
                      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Central Circle */}
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-4xl font-bold text-white">KLARE</div>
              </motion.div>

              {/* Orbiting Elements */}
              {klareSteps.map((step, index) => {
                const angle = index * 72 - 90; // 360/5 = 72 degrees per step
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const IconComponent = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    className={`absolute w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 ${
                      activeStep === step.id
                        ? `bg-gradient-to-br ${step.color} scale-125 shadow-2xl`
                        : "bg-white/10 backdrop-blur-sm hover:scale-110"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 2.5rem)`,
                      top: `calc(50% + ${y}px - 2.5rem)`,
                    }}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: activeStep === step.id ? 1.3 : 1.1 }}
                    animate={
                      activeStep === step.id
                        ? { scale: [1.25, 1.35, 1.25] }
                        : {}
                    }
                    transition={
                      activeStep === step.id
                        ? { duration: 2, repeat: Infinity }
                        : {}
                    }
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        activeStep === step.id ? "text-white" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {klareSteps.map((_, index) => {
                  const currentAngle = index * 72 - 90;
                  const nextAngle = (index + 1) * 72 - 90;
                  const radius = 140;

                  const x1 =
                    192 + Math.cos((currentAngle * Math.PI) / 180) * radius;
                  const y1 =
                    192 + Math.sin((currentAngle * Math.PI) / 180) * radius;
                  const x2 =
                    192 + Math.cos((nextAngle * Math.PI) / 180) * radius;
                  const y2 =
                    192 + Math.sin((nextAngle * Math.PI) / 180) * radius;

                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Erleben Sie die KLARE Methode
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In einem persönlichen Gespräch zeige ich Ihnen, wie die KLARE
              Methode Ihnen zu mehr Kongruenz und Authentizität verhelfen kann.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              KLARE Methode kennenlernen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
