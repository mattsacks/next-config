/*eslint-env node*/
const path = require("path");

const webpackConfig = {
  env: {},
  webpack(config) {
    // Needed for base imports
    config.resolve.modules = [path.resolve(__dirname), "node_modules"];

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = webpackConfig;
