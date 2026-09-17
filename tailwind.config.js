/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0a3d62',
          dark: '#062a45',
          light: '#0f5c8f',
        },
        navy: {
          DEFAULT: '#0a3d62',
          dark: '#062a45',
          950: '#0b1e3d',
          900: '#0e2a52',
          800: '#123568',
        },
        'brand-blue': '#1463e0',
      },
    },
  },
  plugins: [],
}
