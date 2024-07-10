module.exports = {
  env: {
    node: true,
  },
  extends: ['expo', 'prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
