module.exports = {
  purge: {
    content: [
      "./public/**/*.html",
      "./public/app.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    },
  },
  plugins: [],
}
