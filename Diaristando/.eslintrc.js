module.exports = {
  env: {
    node: true,
  },
  extends: ['universe/native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
