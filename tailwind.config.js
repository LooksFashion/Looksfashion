/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#fce4ec',
        dark: '#212121',
        gold: '#bfa46f',
      },
    },
  },
  plugins: [],
}
