module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GildaDisplay: ["Gilda Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-gray": "#f9f9f9",
        "dark-teal": "#002c31",
        "dark-gray": "#2a2a2a",
        "medium-gray": "#5f5f5f",
      },
      spacing: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
