// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure it includes JSX and TSX files
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'architect': "url('/public/content/bg_planning.jpg')",
        'group-discussion': "url('/public/content/pexels-cottonbro-3205567.jpg')",

      })
    },
  },
}
