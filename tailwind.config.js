/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#C92071',
          secondary: '#B5B6F2',
          tertiary: '#991956',
          error: '#EE4266',
          success: '#52CA76',
          warning: '#F6AA1C',
          white: "#FFFFFF",

        darkgray: {
          1: "#1F1F1F",
          2: "#474747",
          3: "#666666",
        },
        lightgray: {
          1: "#8F8F8F",
          2: "#CCCCCC",
          3: "#F5F5F5",
        }
      }
    },
  },
  plugins: [],
}

