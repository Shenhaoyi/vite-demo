// .stylelintrc.js
module.exports = {
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    'stylelint-config-standard-vue',
    'stylelint-config-recess-order', //  在插件中使用'stylelint-order'也可以，但是需要手动配置顺序？
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(less|css|vue|html)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier'],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', ''], // vue 中使用深度选择器
      },
    ],
    'selector-class-pattern': null, // 类名必须'-'连接
  },
};
