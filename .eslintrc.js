module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-v-html': 'warning',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/prop-name-casing': 'error',
  },
};
