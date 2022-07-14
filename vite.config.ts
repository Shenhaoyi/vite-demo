import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // index.html所在目录
  root: path.join(process.cwd(), 'src'),
  plugins: [vue()]
})
