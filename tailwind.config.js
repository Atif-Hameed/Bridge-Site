/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // gradientColors: {
      //   'custom-gradient': ['#E1022B', '#EE3A00', '#F4B449', '#E3598F', '#22AD9A', '#589D65'],
      // },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #E1022B, #EE3A00, #F4B449, #E3598F, #22AD9A, #589D65)',
      },
    },
  },
  plugins: [],
}