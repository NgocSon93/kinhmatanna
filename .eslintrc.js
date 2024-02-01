module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true, // Thêm Jest vào môi trường
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended', // Thêm cài đặt cho Jest
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'jest', // Thêm Jest như một plugin
    ],
    rules: {
      // Các cài đặt quy tắc ESLint
    },
  };