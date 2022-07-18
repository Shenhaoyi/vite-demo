import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['shen', 'ml100']
    // ['简写', '规则组合']
  ],
  presets: [
    // 如果为空，则表示没有预设，不写则会有一些默认预设
    presetUno(), // 一些规则等
    presetAttributify(), // 无值属性书写
    presetIcons({ // 纯css icon
      scale: 1.2,
      warn: true,
    }),
  ],
})
