/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#90b7d5',
          200: '#81add0',
          300: '#73a4cb',
          400: '#659bc5',
          500: '#5792c0',
          600: '#4888bb'
        },
        gray: {
          100: '#b6b8bc',
          200: '#acaeb2',
          300: '#a2a4a9',
          400: '#989a9f',
          500: '#8e9096',
          600: '#84878c',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
