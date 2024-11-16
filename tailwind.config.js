/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'min-[645px]': '645px', // Custom breakpoint
      },
    },
  },
  plugins: [],
}

