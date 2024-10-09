module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "rgba(255, 255, 255, 1)",
        customGray: "rgba(172, 172, 172, 1)",
        customBg: "rgba(81, 60, 56, 1)",
        customDay: "rgba(196, 167, 152, 1)",
      },
      boxShadow: {
        custom:
          "0 2px 4px -1px rgba(172, 172, 172, 1), 0 4px 6px -1px rgba(255, 255, 255, 1)",
      },
      height: {
        "3em": "3em",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #D9D9D9 0%, #737373 100%)",
      },
      width: {
        custom: "72px",
      },
      fontFamily: {
        notosansjp: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
