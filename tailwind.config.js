/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0A0F1F',
        'cyber-darker': '#050A14',
        'cyber-blue': '#00FFFF',
        'cyber-green': '#39FF14',
        'cyber-purple': '#8A2BE2',
        'cyber-pink': '#FF00FF',
        'cyber-red': '#FF0040',
        // Light mode colors
        'light-bg': '#F5F5F7',
        'light-card': '#FFFFFF',
        'light-blue': '#00D9FF',
        'light-purple': '#A855F7',
        'light-pink': '#FF6B9D',
        'light-green': '#00E5A0',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
