module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': ['error'],
    'camelcase' : 'off',
    'no-restricted-syntax' : 'off',
    'func-names' : ['error','as-needed'],
    'no-console' : 'off',
    'no-continue' : 'off',
    'guard-for-in' : 'off',
  },
};
