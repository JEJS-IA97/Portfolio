/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'pho': '320px',
      'mob': '375px',
      'tab': '768px',
      'lap': '1024px',
      'random1': '1228px',
      'desk1': '1280px',
      'random2': '1396px',
      'desk2': '1440px',
      'desk3': '1920px',
      'random3': '2100px',
    },
    extend: {
      colors: {
        "GreenB": "hsl(163.469, 100%, 38%)",
        "Blue2": "hsl(224, 22%, 13%)",
        "Blue1": "hsl(209.412, 57%, 18%)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}