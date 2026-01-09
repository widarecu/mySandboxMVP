module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
  extend: {
    colors: {
      background: '#F9FAFB', // light gray background
      surface: '#FFFFFF', // card background
      primary: '#3B82F6', // soft blue
      primaryDark: '#1D4ED8', // deep blue for hover/CTA
      text: '#1F2937', // dark gray text
      subtext: '#6B7280', // muted gray
      border: '#E5E7EB', // soft borders
    }
  }
},
  plugins: []
}