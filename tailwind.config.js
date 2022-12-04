module.exports = {
  content: ["./**/*.html", "./**/*.md", "./config.toml"],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          600: "#4b5563",
          700: "#374151",
          800: "#4B4E53"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
