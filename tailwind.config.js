/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      lineHeight: {
        "110%": "1.1",
        "180%": "1.8",
      },
      colors: {
        "ash-900": "#0D0D0D",
        "ash-border": "#70727D",
        "ash-msg-300": "#9D9EA3",
        "ash-f-08": "rgba(255, 255, 255, 0.08);",
        "ash-f-18": "rgba(255, 255, 255, 0.18);",
        "ash-f-08-solid": "#202020",
        "green-flag-border": "rgba(205, 246, 237, 0.20);",
        "green-flag": "rgba(51, 228, 217, 0.30);",
        "green-flag-text": "#429994",

        "ash-700": "#666666",
        "ash-500": "#808080",
        "blue-gredu": "#455DC7",
        "orange-sj": "#FF7F5D",
        "blue-kb": "#3FB9EA",
      },
      boxShadow: {
        dim: "0px -4px 8px 0px rgba(255, 255, 255, 0.30) inset, 0px 8px 32px 0px rgba(51, 228, 217, 0.15);",
        shine:
          "0px -4px 8px 0px rgba(255, 255, 255, 0.30) inset, 0px 16px 64px 0px rgba(51, 228, 217, 0.20);",
      },
      maxHeight: {
        "1/2": "50%",
      },
      width: {
        "272px": "272px",
      },
      height: {
        "640px": "40rem",
      },
      listStyleType: {
        lower: "lower-alpha",
      },
      scale: {
        "104percent": "1.04",
      },
      minWidth: {
        "16px": "16px",
      },
    },
  },
  plugins: [],
};
