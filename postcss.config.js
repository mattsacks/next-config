/*eslint-env node*/
const plugins = ["postcss-easy-import", "tailwindcss", "autoprefixer"];

if (process.env.NODE_ENV === "production") {
  plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: ["./**/*.jsx", "./**/*.tsx", "./**/*.module.css"],
      css: ["./styles/**/*.css"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }
  ]);
}

module.exports = { plugins };
