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
        'table-plan': "url('/public/content/pexels-jeshoots-com-147458-834892.jpg')",
        'person-computer': "url('/public/content/pexels-karolina-grabowska-4491459.jpg')",
        'saw-sparks': "url('/public/content/pexels-rezwan-1145434.jpg')",






      })
    },
  },
}
