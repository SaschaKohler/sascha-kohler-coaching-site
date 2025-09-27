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
  PauseIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const klareSteps = [
  {
    id: 1,
    letter: "K",
    title: "Klarheit",
    subtitle: "Mentale Ausrichtung finden",
    description: "Erkenne, was wirklich wichtig ist",
    process:
      "Mit bewährten Mentaltechniken schaffen wir zunächst mentale Klarheit. Durch gezielte Visualisierungsübungen und Fokustechniken erkennen Sie, was Sie wirklich bewegt und welche Ziele für Sie authentisch sind. Diese mentale Landkarte wird zur Grundlage aller weiteren Schritte.",
    icon: EyeIcon,
    color: "bg-klare-k",
    gradient: "from-klare-k to-blue-600",
    textColor: "text-klare-k",
    borderColor: "border-klare-k",
    bgSoft: "bg-klare-k-soft",
  },
  {
    id: 2,
    letter: "L",
    title: "Lebendigkeit",
    subtitle: "Energie & Flow aktivieren",
    description: "Spüre deine natürliche Energie",
    process:
      "Hier aktivieren wir Ihre natürlichen Energiequellen durch Atemtechniken und Flow-Training. Sie lernen, wann Sie in Ihrem Element sind und wie Sie diesen Zustand bewusst herbeiführen können. Mentaltraining macht diese Lebendigkeit jederzeit abrufbar.",
    icon: HeartIcon,
    color: "bg-klare-l",
    gradient: "from-klare-l to-purple-600",
    textColor: "text-klare-l",
    borderColor: "border-klare-l",
    bgSoft: "bg-klare-l-soft",
  },
  {
    id: 3,
    letter: "A",
    title: "Ausrichtung",
    subtitle: "Mentale Programmierung",
    description: "Finde deinen authentischen Weg",
    process:
      "Basierend auf Ihrer Klarheit programmieren wir Ihr Unterbewusstsein neu. Mit Affirmationen, Anker-Techniken und mentalen Strategien entwickeln Sie eine unerschütterliche innere Ausrichtung. Ihr mentaler Kompass zeigt ab sofort in die richtige Richtung.",
    icon: LightBulbIcon,
    color: "bg-klare-a",
    gradient: "from-klare-a to-pink-600",
    textColor: "text-klare-a",
    borderColor: "border-klare-a",
    bgSoft: "bg-klare-a-soft",
  },
  {
    id: 4,
    letter: "R",
    title: "Realisierung",
    subtitle: "Mental stark umsetzen",
    description: "Setze deine Erkenntnisse um",
    process:
      "Jetzt setzen Sie um - mental stark und fokussiert. Mit Peak-Performance-Techniken und mentalen Durchhaltestrategien verwandeln Sie Pläne in Realität. Sie lernen, wie Spitzensportler zu denken und Hindernisse als Sprungbretter zu nutzen.",
    icon: RocketLaunchIcon,
    color: "bg-klare-r",
    gradient: "from-klare-r to-orange-600",
    textColor: "text-klare-r",
    borderColor: "border-klare-r",
    bgSoft: "bg-klare-r-soft",
  },
  {
    id: 5,
    letter: "E",
    title: "Entfaltung",
    subtitle: "Kontinuierliche mentale Stärke",
    description: "Lebe dein volles Potenzial",
    process:
      "Der Weg zu dauerhafter mentaler Stärke. Sie entwickeln Routinen und Gewohnheiten, die Ihre neue Denkweise festigen. Durch kontinuierliches mentales Training bleiben Sie auch unter Stress in Ihrer Kraft und wachsen stetig über sich hinaus.",
    icon: SparklesIcon,
    color: "bg-klare-e",
    gradient: "from-klare-e to-green-600",
    textColor: "text-klare-e",
    borderColor: "border-klare-e",
    bgSoft: "bg-klare-e-soft",
  },
];

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      // Only enable auto-play on desktop by default
      if (!isMobileDevice) {
        setIsAutoPlay(true);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-advance through steps (only when auto-play is enabled)
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= klareSteps.length ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const activeStepData = klareSteps.find(step => step.id === activeStep);

  return (
    <section className="py-24 bg-cream" id="methode">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-warm-brown text-lg mb-4"
          >
            Mentaltraining nach der KLARE-Methode
          </motion.p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-dark-brown mb-8">
            Raum für mentale{" "}
            <span className="bg-gradient-klare bg-clip-text text-transparent font-medium">
              Selbstentdeckung
            </span>
          </h2>
          <p className="text-xl text-warm-brown leading-relaxed">
            Als Mentaltrainer verstehe ich mich als Raumschaffer für Ihre 
            mentale Entwicklung. Durch bewährte Mentaltechniken und die 
            KLARE-Methode schaffe ich einen geschützten Rahmen, in dem Sie 
            selbst entdecken können, wie Sie Ihre mentale Stärke aktivieren.
          </p>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20"
        >
          {klareSteps.map((step, index) => (
            <motion.button
              key={step.letter}
              onClick={() => {
                setActiveStep(step.id);
                setIsAutoPlay(false);
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 md:p-6 rounded-xl border transition-all duration-300 ${
                activeStep === step.id
                  ? `bg-warm-white border-2 ${step.borderColor} shadow-lg transform -translate-y-2`
                  : 'bg-warm-white border-light-beige hover:shadow-md hover:-translate-y-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 relative overflow-hidden`}
              >
                <span className="text-white font-serif text-lg md:text-xl font-bold relative z-10">
                  {step.letter}
                </span>
                {activeStep === step.id && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              <h3 className="font-serif text-base md:text-lg text-dark-brown mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-warm-brown leading-relaxed">
                {step.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex justify-center items-center mb-8 gap-4">
            <div className="flex items-center space-x-2 bg-warm-white rounded-full p-2 shadow-md border border-light-beige">
              {klareSteps.map((step) => (
                <motion.button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id 
                      ? step.color 
                      : 'bg-soft-beige hover:bg-light-beige'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Auto-play Toggle */}
            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full shadow-md border transition-all duration-300 ${
                isAutoPlay 
                  ? `${activeStepData?.color} border-transparent text-white` 
                  : 'bg-warm-white border-light-beige text-warm-brown hover:bg-soft-beige'
              }`}
            >
              {isAutoPlay ? (
                <PauseIcon className="w-4 h-4" />
              ) : (
                <PlayIcon className="w-4 h-4" />
              )}
            </motion.button>
          </div>

          {/* Main Step Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="relative mb-16"
            >
              <div className={`bg-warm-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border-l-4 ${activeStepData?.borderColor} relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${activeStepData?.bgSoft} rounded-full blur-3xl opacity-30`} />
                
                <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
                  {/* Step Icon & Title */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="lg:w-1/3 text-center lg:text-left"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 ${activeStepData?.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 relative overflow-hidden`}>
                      <span className="text-white font-serif text-2xl md:text-3xl font-bold relative z-10">
                        {activeStepData?.letter}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl text-dark-brown mb-2">
                      {activeStepData?.title}
                    </h4>
                    <p className={`font-medium ${activeStepData?.textColor} text-lg md:text-xl`}>
                      {activeStepData?.subtitle}
                    </p>
                  </motion.div>

                  {/* Process Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:w-2/3"
                  >
                    <div className="bg-cream/50 p-6 md:p-8 rounded-xl border border-light-beige">
                      <p className="text-warm-brown leading-relaxed text-lg md:text-xl">
                        {activeStepData?.process}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-8">
                  <motion.button
                    onClick={() => {
                      setActiveStep(activeStep > 1 ? activeStep - 1 : klareSteps.length);
                      setIsAutoPlay(false);
                    }}
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-soft-beige hover:bg-light-beige rounded-full transition-all duration-300 border border-light-beige"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-warm-brown rotate-180" />
                  </motion.button>

                  <div className="text-center">
                    <span className="text-sm text-warm-brown">
                      {activeStep} von {klareSteps.length}
                    </span>
                  </div>

                  <motion.button
                    onClick={() => {
                      setActiveStep(activeStep < klareSteps.length ? activeStep + 1 : 1);
                      setIsAutoPlay(false);
                    }}
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-soft-beige hover:bg-light-beige rounded-full transition-all duration-300 border border-light-beige"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-warm-brown" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Kongruenz Erklärung */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-3xl lg:text-4xl font-light text-dark-brown mb-8">
              Das Ziel: Kongruenz
            </h3>
            <div className="bg-gradient-to-r from-klare-k-soft via-klare-l-soft to-klare-e-soft p-8 md:p-12 rounded-2xl border border-light-beige">
              <div className="bg-warm-white/90 p-6 md:p-8 rounded-xl">
                <p className="text-lg md:text-xl text-warm-brown leading-relaxed mb-6">
                  Kongruenz bedeutet die bewusste Neuausrichtung Ihrer oft
                  unbewussten Persönlichkeitsanteile in eine lebensbejahende
                  Richtung. Wenn alle Teile Ihrer Persönlichkeit in dieselbe
                  Richtung wirken, entwickeln Sie das Momentum, um Ihre Ziele
                  tatsächlich zu verwirklichen.
                </p>
                <div className="border-l-4 border-klare-k pl-6">
                  <p className="text-lg md:text-xl text-dark-brown font-medium italic font-serif">
                    "Wirklichkeit ist das, was wirkt."
                  </p>
                  <p className="text-warm-brown mt-3 text-base md:text-lg">
                    Wenn Sie kongruent leben, wirken Sie authentisch und
                    kraftvoll. Ihre Gedanken, Gefühle und Handlungen arbeiten
                    zusammen, statt gegeneinander. Das ist der Moment, in dem
                    sich Träume in Wirklichkeit verwandeln.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 md:p-12 bg-warm-white rounded-2xl border border-light-beige shadow-lg"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-dark-brown mb-4">
              Bereit für Ihren Weg zur Kongruenz?
            </h3>
            <p className="text-warm-brown mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Die KLARE-Methode ist kein starres System, sondern ein flexibler
              Rahmen, der sich an Ihre individuellen Bedürfnisse anpasst. Jeder
              Mensch ist einzigartig, und so ist auch sein Weg zur
              Selbstentdeckung.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#kontakt"
                className="inline-block px-8 py-4 bg-deep-brown text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-deep-brown border-2 border-deep-brown hover:shadow-lg transform hover:-translate-y-1"
              >
                Kostenloses Erstgespräch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}