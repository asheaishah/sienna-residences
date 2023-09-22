/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#E6F7FF',
        100: '#BAE8FF',
        200: '#86DFFF',
        300: '#63D4FF',
        400: '#40BAFF',
        500: '#3CA0F3',
        600: '#3390DE',
        700: '#2A7AB9',
        800: '#216295',
        900: '#1E567E',
        },
        brown: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },

      keyframes: {
        pulse: {
          '0%, ': { transform: 'scale(1)', opacity: 0 },
          '50%, ': { opacity: 1 },
          '100%': { transform: 'scale(1.2)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

