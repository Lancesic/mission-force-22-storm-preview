/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#173343",
        harbor: "#23576a",
        water: "#6fb5bf",
        sunlight: "#f6c76a",
        paper: "#fff7e7",
        coral: "#e8795b",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 51, 67, 0.14)",
      },
    },
  },
  plugins: [],
};
