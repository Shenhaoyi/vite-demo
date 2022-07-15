import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // index.html所在目录, 默认为process.cwd()
  // root: path.join(process.cwd(), 'src'),
  plugins: [vue()],
  resolve: {
    // 别名，@rollup/plugin-alias的入口
    alias: [
      {
        find: /@\//,
        replacement: path.join(process.cwd(), 'src'),
      },
    ],
  },
  css: {
    // 预处理器
    preprocessorOptions: {
      less: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入(用于全局变量使用，以及全局样式覆盖)
        additionalData: `@import "${path.resolve('./src/styles/mixins.less')}";`
      },
    }
  }
})
