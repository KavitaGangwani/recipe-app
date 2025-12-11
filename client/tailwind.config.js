/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceFast: "bounce 0.5s infinite", // default is 1s → now 0.5s
      },
      fontFamily: {
        bit: ["Bitcount Prop Single", "sans-serif"],  
        logo : ["Playwrite NO", "sans-serif"],
        heading : ["Merriweather", "serif"]
      },
    },
  },
  plugins: [],
}
