import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Helvetica",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
        ],
        script: ["Parisienne"],
        boldrussian: ["Helvetica"],
      },
    },
  },

  plugins: [typography],
};
