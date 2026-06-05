module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        claw: {
          50: "#FEF2F1",
          100: "#FDE3E1",
          200: "#FBCBC7",
          300: "#F7A9A2",
          400: "#F07A6F",
          500: "#E63B2E",
          600: "#D42A1D",
          700: "#B22318",
          800: "#932118",
          900: "#7A211B",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#111111",
        },
      },
    },
  },
};
