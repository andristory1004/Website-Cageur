module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}", 
    "./node_modules/tw-elements/dist/js/**/*.js"
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
