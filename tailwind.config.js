/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'min-[645px]': '645px', // Custom breakpoint
      },
      fontFamily : {
        "custom-font" : ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

