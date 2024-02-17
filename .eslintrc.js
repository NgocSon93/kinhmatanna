module.exports = {
    env: {
      node: true,
      jest: true,
    },
    extends: [
      "plugin:vue/vue3-essential",
      "plugin:@typescript-eslint/eslint-recommended",
      'eslint:recommended',
      'plugin:vue/base',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'eslint-config-prettier'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
      "parser": "@typescript-eslint/parser",
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'jest',
    ],
    rules: {
      "@typescript-eslint/camelcase": "off"
    },
  };