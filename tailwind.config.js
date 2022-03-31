const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#17171f",
        "blue-primary": "#3f3fff",
        "blue-secondary": "#a3a3ff",
        "accent-color": "#ff49db",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
