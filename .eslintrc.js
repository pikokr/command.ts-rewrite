module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
  },
}
