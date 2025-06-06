/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #242424, #080808)',
        // Removed invalid 'button-border'
      },
      colors: {
        background: '#222222',
        text: '#FFFFFF',
        buttons: '#FF4D00',
        shadow: '#363534FF',
        buttonBorder: 'orange', // if needed
      },
      fontSize: {
        base: '14px',
        lg: '16px',
        xl: '25px',
        button: '40px',
        large: '70px',
        extraLarge: '120px',
      },
      fontFamily: {
        tgs: ['TGS Perfect', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
