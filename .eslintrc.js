/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@teobale/eslint-config/index.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
