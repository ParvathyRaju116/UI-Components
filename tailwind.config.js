/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: 'rgb(243,237,217)',
        customColor2: 'rgb(214,238,214)',
      },
    },
  },
  plugins: [],
}

