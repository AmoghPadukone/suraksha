// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDA51D",
        orangey: {
          DEFAULT: "#FDA51D",
          100: "#FFD9B3",
          200: "#FFC280",
          300: "#FFA84D",
          400: "#FF8E1A",
          500: "#FDA51D",
          600: "#D47C00",
          700: "#A65300",
          800: "#7D2A00",
          900: "#540000",
        },
        secondary: {
          DEFAULT: "#000",
          100: "#FF9001",
          200: "#FF8E01",
        },
        softWhite: "#F8F8F8",
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        inputBorder: "#CDCDE0",
      },
      fontFamily: {
        pthin: ["Montserrat-Thin", "sans-serif"],
        pextralight: ["Montserrat-ExtraLight", "sans-serif"],
        plight: ["Montserrat-Light", "sans-serif"],
        pregular: ["Montserrat-Regular", "sans-serif"],
        pmedium: ["Montserrat-Medium", "sans-serif"],
        psemibold: ["Montserrat-SemiBold", "sans-serif"],
        pbold: ["Montserrat-Bold", "sans-serif"],
        pextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        pblack: ["Montserrat-Black", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px", // Set your default border radius value here
      },
      fontSize: {
        12: "16px",
        14: "18px",
        16: "20px",
        18: "22px",
        20: "24px",
        24: "28px",
        26: "30px",
        // Add more font sizes here
      },
    },
  },
  plugins: [],
};
