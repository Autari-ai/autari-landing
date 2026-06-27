import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14181F',
        pine: '#0E7C66',
        spark: '#19D3A2',
        mist: '#F5F7F6',
        fog: '#E4E9E7',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseSpark: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.35' } },
        fadeIn: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        pulseSpark: 'pulseSpark 1.8s ease-in-out infinite',
        fadeIn: 'fadeIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
