/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "beige": "#E6B085"
      },
      backgroundImage: {
        "cafe": "url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80')",
        "bg1": "url('/img/bg3.jpg')",
        "bg2": "url('/img/bg4.jpg')",
        "menu": "url('https://images.unsplash.com/photo-1568031813264-d394c5d474b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"
      },
      fontFamily: {
        "MarckScript": ['MarckScript']
      },
      width: {
        "55ch": "55ch"
      }
    },
  },
  plugins: [],
}
