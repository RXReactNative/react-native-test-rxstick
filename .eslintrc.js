module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  globals: {
    __DEV__: true,
  },
  rules: {
    // 表达式的结尾就应该以分号结尾
    // 'semi': 0,
    // 注释后边 只能有一个空隔， [多个/也不行，超过1个空格也不行]
    'spaced-comment': [ 1, "always" ],
    // 此规则在非空文件的末尾强制执行至少一个换行符, 关闭此规则
    'eol-last': 0,
    // 要求或禁止尾随逗号, 关闭此规则 , vue 需要【方法】需要在尾部添加逗号，主要是方便阅读代码
    'comma-dangle': 0,
    // 方法名和刮号之间需要有一格空格, 关闭此规则
    'space-before-function-paren': 0,
    'react/prop-types': 0,
  }
}
