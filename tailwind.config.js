/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
        script: ['MiltonTwoBold', 'cursive'],
        boldrussian: ['"Bad Russian"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
