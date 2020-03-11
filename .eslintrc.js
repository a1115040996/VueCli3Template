module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unreachable': 'off', // 关闭 带有返回值的方法之中调用另一个方法的时候  把方法写在了return后面 报错
      'no-console': 'off', // 打包时 不检查console log config.js中 有移除方法
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
