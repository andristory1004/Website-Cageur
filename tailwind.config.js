module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lobster :['Lobster'],
        aku :['Booga']
      },
      colors:{
        green:'#1fcc79',
        gray:'#e5e7eb'
      }
    },
  },
  plugins: [],
}
