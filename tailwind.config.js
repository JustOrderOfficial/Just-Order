/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',    // orange-400
        secondary: '#14b8a6',  // teal-400
        background: '#18181b',
        textMuted: '#ffffffcc', // white/80
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
