module.exports = {
  purge: ["./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "rgb(0, 123, 255)",
        "secondary": "rgb(35, 35, 35)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
