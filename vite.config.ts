import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Unocss from 'unocss/vite';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
// import svgLoader from 'vite-svg-loader';
import virtualModule from './plugins/vite-plugin-virtual-module';
import svgLoader from './plugins/vite-plugin-vue-svg.js';

const isProduction = process.env.NODE_ENV === 'production';

const CDN_URL = 'xxx'; // build 的 url

// https://vitejs.dev/config/
export default defineConfig({
  // index.html所在目录, 默认为process.cwd()
  // root: path.join(process.cwd(), 'src'),
  base: isProduction ? CDN_URL : '/',
  plugins: [
    vue(),
    Unocss(),
    viteEslint({
      fix: true, // 自动修复
    }),
    viteStylelint({
      // 问题: 为什么自动修复的内容，vscode没有给出提示
      fix: true,
    }),
    svgLoader(),
    virtualModule(), // 虚拟模块
  ],
  resolve: {
    // 别名，@rollup/plugin-alias的入口
    alias: [
      {
        find: /@\//,
        replacement: path.join(process.cwd(), 'src/'), // 匹配到 / 就要带上
      },
    ],
  },
  css: {
    // 预处理器
    preprocessorOptions: {
      less: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入(用于全局变量使用，以及全局样式覆盖)
        additionalData: `@import "${path.resolve('./src/styles/mixins.less')}";`,
      },
    },
    // CSS Module
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义（好像没有生效？）
      generateScopedName: '[name]__[local]___[hash:base64:5]', // name 表示当前文件名，local 表示类名，5表示生成的哈希值长度
    },
  },
  optimizeDeps: {},
});
