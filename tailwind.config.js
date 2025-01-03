/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "GreenB": "hsl(163.469, 100%, 38%)",
        "Blue2": "hsl(224, 22%, 13%)",
        "Blue1": "hsl(209.412, 57%, 18%)",
      }
    },
  },
  plugins: [],
}