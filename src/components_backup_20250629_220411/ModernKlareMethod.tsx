"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  EyeIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

const klareSteps = [
  {
    id: 1,
    letter: "K",
    title: "Klarheit",
    subtitle: "Mentale Ausrichtung finden",
    description:
      "Mit bewährten Mentaltechniken schaffen wir zunächst mentale Klarheit. Durch gezielte Visualisierungsübungen und Fokustechniken erkennen Sie, was Sie wirklich bewegt und welche Ziele für Sie authentisch sind. Diese mentale Landkarte wird zur Grundlage aller weiteren Schritte.",
    icon: EyeIcon,
    gradient: "from-indigo-500 via-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
    bgGradient: "from-blue-50 to-indigo-50",
    darkBgGradient: "from-blue-950/20 to-indigo-950/20",
  },
  {
    id: 2,
    letter: "L",
    title: "Lebendigkeit",
    subtitle: "Energie & Flow aktivieren",
    description:
      "Hier aktivieren wir Ihre natürlichen Energiequellen durch Atemtechniken und Körperwahrnehmung. Lebendigkeit entsteht, wenn Geist und Körper in Einklang sind. Wir lösen energetische Blockaden und schaffen Raum für authentischen Ausdruck.",
    icon: HeartIcon,
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    shadowColor: "shadow-purple-500/20",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-950/20 to-pink-950/20",
  },
  {
    id: 3,
    letter: "A",
    title: "Ausrichtung",
    subtitle: "Mentale Ausrichtung finden",
    description:
      "Mit mentalen Strategien richten wir Ihr Leben nach Ihren wahren Werten aus. Diese Phase nutzt bewährte Techniken aus dem Mentaltraining, um eine klare innere Kompass zu entwickeln und Prioritäten neu zu setzen.",
    icon: LightBulbIcon,
    gradient: "from-pink-500 via-orange-500 to-yellow-400",
    shadowColor: "shadow-pink-500/20",
    bgGradient: "from-pink-50 to-orange-50",
    darkBgGradient: "from-pink-950/20 to-orange-950/20",
  },
  {
    id: 4,
    letter: "R",
    title: "Realisierung",
    subtitle: "Mentale Realisierung ",
    description:
      "Jetzt setzen wir Erkenntnisse in konkrete Handlungen um. Durch mentale Vorstellungstechniken und systematische Umsetzungsstrategien schaffen wir messbare Veränderungen. Mentale Rehearsal-Techniken bereiten Sie optimal auf die Umsetzung vor.",
    icon: RocketLaunchIcon,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    shadowColor: "shadow-orange-500/20",
    bgGradient: "from-orange-50 to-red-50",
    darkBgGradient: "from-orange-950/20 to-red-950/20",
  },
  {
    id: 5,
    letter: "E",
    title: "Entfaltung",
    subtitle: "Vollendete Entwicklung",
    description:
      "In der finalen Phase entfalten Sie Ihr volles Potenzial. Mental training techniques helfen dabei, neue Verhaltensmuster zu festigen und ein kongruentes, authentisches Leben in allen Bereichen zu führen. Hier wird aus Veränderung dauerhafte Transformation.",
    icon: SparklesIcon,
    gradient: "from-green-500 via-emerald-500 to-teal-400",
    shadowColor: "shadow-green-500/20",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "from-green-950/20 to-emerald-950/20",
  },
];

export default function KlareMethod() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance through steps
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= klareSteps.length ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const activeStepData = klareSteps.find(step => step.id === activeStep);

  return (
    <section
      id="klare"
      className="relative py-16 md:py-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-blue-200/50 dark:border-blue-400/30 rounded-full mb-6 shadow-lg"
          >
            <SparklesIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
            <span className="text-blue-800 dark:text-blue-300 font-semibold">
              Meine Eigenentwicklung
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Die{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              KLARE
            </span>{" "}
            Methode
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mentale Transformation Schritt für Schritt
          </p>
        </motion.div>

        {/* Mobile-First Design */}
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full p-2 shadow-lg">
              {klareSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id 
                      ? `bg-gradient-to-r ${step.gradient}` 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, type: "spring", damping: 20 }}
              className="relative"
            >
              {/* Active Step Card */}
              <div className={`relative bg-gradient-to-br ${activeStepData?.bgGradient} dark:${activeStepData?.darkBgGradient} rounded-3xl md:rounded-[2rem] p-6 md:p-8 lg:p-12 shadow-2xl ${activeStepData?.shadowColor} border border-white/50 dark:border-slate-700/50 backdrop-blur-xl`}>
                
                {/* Letter Circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative"
                >
                  <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${activeStepData?.gradient} rounded-2xl flex items-center justify-center font-bold text-white text-2xl md:text-3xl mx-auto mb-6 shadow-xl font-sans relative overflow-hidden`}>
                    {activeStepData?.letter}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3"
                  >
                    {activeStepData?.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium mb-6"
                  >
                    {activeStepData?.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 dark:border-slate-700/50"
                  >
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                      {activeStepData?.description}
                    </p>
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-8">
                  <motion.button
                    onClick={() => {
                      setActiveStep(activeStep > 1 ? activeStep - 1 : klareSteps.length);
                      setIsAutoPlay(false);
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full shadow-lg border border-white/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-slate-600 dark:text-slate-300 rotate-180" />
                  </motion.button>

                  {/* Auto-play Toggle */}
                  <motion.button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 backdrop-blur-xl rounded-full shadow-lg border transition-all duration-300 ${
                      isAutoPlay 
                        ? `bg-gradient-to-r ${activeStepData?.gradient} border-white/50 text-white shadow-xl` 
                        : 'bg-white/80 dark:bg-slate-800/80 border-white/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <PlayIcon className={`w-6 h-6 ${!isAutoPlay ? 'transform scale-110' : ''}`} />
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      setActiveStep(activeStep < klareSteps.length ? activeStep + 1 : 1);
                      setIsAutoPlay(false);
                    }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full shadow-lg border border-white/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Step Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-5 gap-2 md:gap-4 mt-8 max-w-2xl mx-auto"
          >
            {klareSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-3 md:p-4 rounded-2xl transition-all duration-300 ${
                    activeStep === step.id
                      ? `bg-gradient-to-br ${step.gradient} text-white shadow-xl ${step.shadowColor}`
                      : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-white/80 dark:hover:bg-slate-700/80'
                  } backdrop-blur-xl border border-white/50 dark:border-slate-700/50`}
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                  <div className={`text-xs md:text-sm font-bold ${activeStep === step.id ? 'text-white' : ''}`}>
                    {step.letter}
                  </div>
                  {activeStep === step.id && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white/50 dark:border-slate-700/50 backdrop-blur-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Starten Sie Ihre mentale Transformation
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Entdecken Sie in einem kostenlosen Gespräch, wie die KLARE Methode 
                Ihr Leben verändern kann.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-lg text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-xl"
              >
                Kostenloses Kennenlerngespräch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}