/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
            primary: "#26262B",
            secondary: "#202023ff",
            text: "#E5E5E5",
        },
      },
    },
  },

  plugins: [],
};
