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
        'brand-navy': '#1E293B',
        'brand-red': '#D42B2B',
        'brand-ice': '#E0F2FE',
        'brand-silver': '#B8C4CE',
        'brand-dark': '#060F1E',
        'brand-dark-blue': '#0B1120',
        'brand-card': '#111827',
        'brand-card-hover': '#0F172A',
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
