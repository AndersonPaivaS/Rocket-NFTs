/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,ts,jsx,mdx}',
    './src/app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#FF5B50'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)']
      }
    },
  },
  plugins: [],
}
