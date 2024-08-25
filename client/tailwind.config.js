/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#F7FFE5', // Warna-1
        'skibidi-color' : '#446741', // Warna-2
        'leaderboard-color' : '#F7FFE5' // Warna-3
      },
    },
  },
  plugins: [],
}

