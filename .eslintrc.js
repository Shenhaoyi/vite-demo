module.exports = {
  env: {
    // 环境设置
    browser: true,
    node: true, // 能够直接使用 module 这种cjs
    es2021: true,
  },
  extends: [
    // 第1种情况
    'eslint:recommended',
    // 第2种情况，一般配置的时候可以省略 `eslint-config`
    // 'standard',
    // 第3种情况，可以省略包名中的 `eslint-plugin`
    // 格式一般为: `plugin:${pluginName}/${configName}`
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 接入prettier规则
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser', // 提供解析vue template的能力
  // 优先级低于parse的语法解析配置
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // 提供解析ts的能力
    sourceType: 'module', // 使用 ES Module
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'], // 通过插件引入对应的规则，引入的规则默认都不开启
  rules: {
    // 单规则设置
    'prettier/prettier': 'warn', // 注意要加上这一句，开启 prettier 自动修复的功能
    '@typescript-eslint/no-explicit-any': 'error', // 禁止使用any
  },
  globals: {
    // 不可重写
    $: false,
    jQuery: false,
  },
};
