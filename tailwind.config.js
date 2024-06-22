/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "786px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        main: "var(--main-color)",
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
  plugins: [],
};
