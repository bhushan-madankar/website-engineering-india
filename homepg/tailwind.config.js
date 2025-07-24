/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // Example custom color
        secondary: "#F59E0B",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

