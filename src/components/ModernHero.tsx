'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ModernHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network SVG Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Neural Network Connections */}
          <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
            <motion.path
              d="M100,200 Q500,100 900,300"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M150,400 Q600,200 850,500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.path
              d="M200,600 Q400,400 700,700"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </g>
          {/* Neural Nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + (i * 80)}
              cy={200 + Math.sin(i) * 200}
              r="3"
              fill="url(#neuralGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Erfinder der KLARE Methode</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Diplomierter
              </span>
              <br />
              <span className="text-white">Lebens- &</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sozialberater
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Dialog-zentrierte Beratung nach WKO-Methodenkatalog. 
              <br />
              <span className="text-blue-300 font-medium">Monodrama • Provokative Methode • KLARE Methode</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Beratungstermin vereinbaren</span>
              </button>
              
              <button className="px-8 py-4 border border-gray-400/30 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Meine Methoden entdecken
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  KLARE
                </div>
                <div className="text-sm text-gray-400">Methode Erfinder</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-sm text-gray-400">Jahre Apotheker</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  2024
                </div>
                <div className="text-sm text-gray-400">Dipl. LSB</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Brain/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-96 h-96">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full border-2 border-blue-400/30 rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="w-full h-full border-2 border-purple-400/30 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="w-full h-full border-2 border-pink-400/30 rounded-full" />
              </motion.div>

              {/* Central Brain/Symbol */}
              <div className="absolute inset-1/4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl"
                >
                  🧠
                </motion.div>
              </div>

              {/* Floating Elements */}
              {['K', 'L', 'A', 'R', 'E'].map((letter, index) => (
                <motion.div
                  key={letter}
                  className="absolute w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                  style={{
                    top: `${20 + index * 15}%`,
                    right: `${10 + index * 5}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
