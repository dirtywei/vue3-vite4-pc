module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: { defineOptions: 'writable' },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest', // 支持最新es版本
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended' //解决eslint和prettier冲突的问题,需要放在后
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 0 // 禁止不必要的转义字符
  }
}
