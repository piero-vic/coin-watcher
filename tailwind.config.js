module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        4: "20px 1.5fr repeat(2, 1fr)",
        5: "20px 1.5fr repeat(3, 1fr)",
        6: "20px 3fr repeat(4, 1fr)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
