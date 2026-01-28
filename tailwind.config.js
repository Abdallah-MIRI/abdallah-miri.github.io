/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.md',
    './_posts/**/*.md',     
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './**/*.html',
    './**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0e2a4f',
        'green-light': '#b0ed8f',
      },
    },
  },
  plugins: [],
}