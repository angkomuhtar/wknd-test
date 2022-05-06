module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      content: "619px",
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "964px",
        xl: "964px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
      },
      colors: {
        "wknd-pink": "#EEBECE",
      },
    },
  },
  plugins: [],
};
