// This file is managed by dropfort/dropfort_module_build.
// Modifications to this file will be overwritten by default.

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-discard-comments"),
  ],
};

module.exports = config;
