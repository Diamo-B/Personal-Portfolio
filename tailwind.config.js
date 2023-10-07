/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily:{
        ingrid: ["Ingrid Darling", "cursive"],
        itim: ["Itim", "cursive"]
      }
    },
  },
  plugins: [],
}

