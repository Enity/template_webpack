module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
