/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warme, vertrauensvolle Basisfarben
        'warm-white': '#fefdf9',
        'cream': '#fef7e6',
        'light-beige': '#f9ead3',
        'soft-beige': '#f0e6d2',
        'warm-brown': '#8B7355',
        'deep-brown': '#6B5B47',
        'dark-brown': '#4A3F35',
        
        // KLARE-Farben als subtile Akzente
        'klare-k': '#6366F1',
        'klare-l': '#8B5CF6',
        'klare-a': '#EC4899',
        'klare-r': '#F59E0B',
        'klare-e': '#10B981',
        
        // Transparente Versionen für subtile Effekte
        'klare-k-soft': 'rgba(99, 102, 241, 0.1)',
        'klare-l-soft': 'rgba(139, 92, 246, 0.1)',
        'klare-a-soft': 'rgba(236, 72, 153, 0.1)',
        'klare-r-soft': 'rgba(245, 158, 11, 0.1)',
        'klare-e-soft': 'rgba(16, 185, 129, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-klare': 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #F59E0B, #10B981)',
        'hero-gradient': 'linear-gradient(135deg, #fefdf9 0%, #fef7e6 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
