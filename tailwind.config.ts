import type { Config } from 'tailwindcss'

/**
 * Tailwind configuration.
 * Dark mode is class-based (toggled by useTheme), defaulting to the system preference.
 * All animation keyframes live here so components stay inline-style free.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        // ✏️ EDIT ME: core brand palette — Barbie pink + purple
        brand: {
          blue: '#d6219a', // repurposed "blue" slot → hot magenta
          cyan: '#ff5fb7', // repurposed "cyan" slot → bright barbie pink
          violet: '#b15be0', // purple accent
          pink: '#ff9ed8', // soft bubblegum pink
        },
        // Dark theme surface colors (deep plum / aubergine instead of charcoal)
        ink: {
          950: '#1a0718',
          900: '#250a24',
          850: '#301030',
          800: '#3c1740',
          700: '#4e2256',
        },
      },
      fontFamily: {
        // Inter for body, JetBrains Mono for headings / code-style elements.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 95, 183, 0.18), 0 0 24px -4px rgba(214, 33, 154, 0.40)',
        'glow-violet': '0 0 0 1px rgba(177, 91, 224, 0.22), 0 0 28px -6px rgba(177, 91, 224, 0.5)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(255,95,183,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,95,183,0.07) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgba(214,33,154,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,33,154,0.09) 1px, transparent 1px)',
      },
      keyframes: {
        'slime-bounce': {
          '0%, 100%': { transform: 'translateY(0) scaleX(1) scaleY(1)' },
          '45%': { transform: 'translateY(-8%) scaleX(0.96) scaleY(1.04)' },
          '60%': { transform: 'translateY(0) scaleX(1.04) scaleY(0.96)' },
          '75%': { transform: 'translateY(-2%) scaleX(0.99) scaleY(1.01)' },
        },
        'slime-jiggle': {
          '0%, 100%': { transform: 'scaleX(1) scaleY(1)' },
          '25%': { transform: 'scaleX(1.12) scaleY(0.88)' },
          '50%': { transform: 'scaleX(0.9) scaleY(1.1)' },
          '75%': { transform: 'scaleX(1.05) scaleY(0.95)' },
        },
        'ear-wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(3deg)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '96%': { transform: 'scaleY(0.1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'crawl-bob': {
          '0%, 100%': { transform: 'translateY(0) scaleY(0.82)' },
          '50%': { transform: 'translateY(-4px) scaleY(0.86)' },
        },
      },
      animation: {
        'slime-bounce': 'slime-bounce 2.4s ease-in-out infinite',
        'slime-jiggle': 'slime-jiggle 0.5s ease-in-out',
        'ear-wiggle': 'ear-wiggle 3s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'spin-slow': 'spin-slow 1.2s linear infinite',
        glitch: 'glitch 0.3s steps(2, end) 2',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'crawl-bob': 'crawl-bob 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
