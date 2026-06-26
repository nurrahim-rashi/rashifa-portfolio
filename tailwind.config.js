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
        script: ["Blosta Script"],
        boldrussian: ["Bad Russian", "Helvetica"],
      },
    },
  },

  plugins: [typography],
};
