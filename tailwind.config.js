module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        notoSerif: [
          '"Noto Serif"',
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        cursive: [
          '"Style Script"',
          "Georgia",
          "Cambria",
          "cursive",
        ],
      },
      colors: {
        "custom-blue": "#070a0f",
        "custom-gray": "#1f2937",
        "custom-white": "#f9f9f9",
        goldLight: "#ffde96",
        goldDark: "#815f16",
        gold: "#cd9c31",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(121.21deg, #c79d4f 13.03%, #fad694 48.04%, #e9c279 81.98%)",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
