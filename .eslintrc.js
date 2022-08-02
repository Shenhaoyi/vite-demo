module.exports = {
  env: { // 环境设置
    browser: true,
    es2021: true
  },
  extends: [
    // 第1种情况
    'eslint:recommended',
    // 第2种情况，一般配置的时候可以省略 `eslint-config`
    'standard',
    // 第3种情况，可以省略包名中的 `eslint-plugin`
    // 格式一般为: `plugin:${pluginName}/${configName}`
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // 提供解析ts的能力
    sourceType: 'module' // 使用 ES Module
  },
  plugins: ['vue', '@typescript-eslint'], // 通过插件引入对应的规则，引入的规则默认都不开启
  rules: {
    // 单规则设置
  },
  globals: {
    // 不可重写
    $: false,
    jQuery: false
  }
}
