/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          '1000': 'var(--ion-color-success)',
        }
      }
    },
  },
  plugins: [],
}
