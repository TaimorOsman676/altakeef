/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00E5FF',
        'brand-navy': '#1E1E1E',
        'brand-red': '#D42B2B',
        'brand-ice': '#E0F2FE',
        'brand-silver': '#B8C4CE',
        'brand-dark': '#121212',
        'brand-dark-blue': '#181818',
        'brand-card': '#1E1E1E',
        'brand-card-hover': '#252525',
      },
      fontFamily: {
        arabic: ['var(--font-ibm-plex-sans-arabic)', 'sans-serif'],
        english: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
