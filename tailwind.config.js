/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        comic: ["Comic Relief", "cursive"],
        chatFont: ["Josefin Sans", "sans-serif"],
        messageFont: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
}

