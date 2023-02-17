module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    sourceType: 'module',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: 'babel-eslint',
  },
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
