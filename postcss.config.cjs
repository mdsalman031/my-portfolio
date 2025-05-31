// ❌ Don't use this in .cjs file:
// import tailwindcss from '@tailwindcss/postcss';

// ✅ Use require:
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
