/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,liquid}",
    "./_layouts/**/*.{html,liquid}",
    "./_posts/**/*.{html,md,markdown}",
    "./*.{html,md,markdown}",
    "./**/*.{html,md,markdown,liquid}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
