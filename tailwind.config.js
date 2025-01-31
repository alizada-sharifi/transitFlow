module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#091242",
          100: "#111C55",
          200: "#273270",
          400: "#4E5683",
        },
        secondary: {
          50: "#e8e8e8",
          100: "#f4f4f4",
          150: "#d8d8d8",
          200: "#23212A",
          250: "#666C89",
          300: "#041c37",
          400: "#1C1F35",
        },
        error: "#c30000",
        golden: "#FFBE34",

        slate: "#666C89",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)",
        header:
          " linear-gradient(91.26deg, #032D5F 19.32%, rgba(9, 18, 66, 0.35) 59.95%)",
        "home-bg": "url('/src/assets/images/home_bg.jpg')",
        "golden-btnBg": "url(./src/assets/images/golden-btn-bg.png)",
        "hover-golden": "url(./src/assets/images/hover-golden.png)",
        darkBtn: "url(./src/assets/images/darkBtn.png)",
        "hover-dark": "url(./src/assets/images/hover-dark.png)",
      },
      fontFamily: {
        Krub: ["krub", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
