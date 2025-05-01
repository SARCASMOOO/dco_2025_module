// This file is managed by dropfort/dropfort_build.
// Modifications to this file will be overwritten by default.

import drupalContrib from "eslint-plugin-drupal-contrib";

const recommended = drupalContrib.configs["flat/recommended"];

export const files = ["*.js", "*.mjs", "*.cjs"];
export const ignores = [
  ".gitlab/*",
  ".github/*",
  ".husky/*",
  ".vscode/*",
  "bin/*",
  "ci/*",
  "config/*",
  "node_modules/*",
  "vendor/*",
  "drupal-ignore/*",
  "!.*.js",
  "!.*.mjs",
  "!.*.cjs",
];

export const config = {
  plugins: {
    recommended,
  },
};

export default [
  config,
  {
    files,
  },
  {
    ignores,
  },
];
