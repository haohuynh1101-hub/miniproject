module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { usePrettierrc: true, endOfLine: 'auto' }], // Use our .prettierrc file as source,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/prop-types': 0,
    'no-useless-escape': 0,
  },
};
