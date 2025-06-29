/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      colors: {
        logo: `#580EF8`,
        'primary-light': `#7332ff`,
        'primary-light-bg': `#580EF81A`,
        'section-bg':`#580ef80b`,
        bgGray: `#F7F7FD`,
        background: "#FFFCF2",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'nanum': ['Nanum Myeongjo', 'serif'],
        annie: ['"Annie Use Your Telescope"', 'cursive'],
        spicyrice: ['"Spicy Rice"',],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
