module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'only-warn'],
  extends: [
    // 'eslint:recommended',
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './__tests__/tsconfig.json',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', //["error", { "prefixWithI": "always" }]
    '@typescript-eslint/no-floating-promises': 'error',
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': "off",
    '@typescript-eslint/no-unused-vars-experimental': ["error"],
    'no-underscore-dangle': 'off',
    'import/named': 'off',
    'require-await': 'error'

  }
}
