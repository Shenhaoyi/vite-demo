import { promises as asyncFs } from 'fs';
import { Plugin } from 'vite';
import { compileTemplate } from 'vue/compiler-sfc';
// 参考 https://github.com/jpkleemans/vite-svg-loader/blob/main/index.js

export default function svgLoader(): Plugin {
  const svgRegex = /\.svg$/;

  return {
    name: 'svg-loader',
    enforce: 'pre',

    async load(id) {
      if (!id.match(svgRegex)) {
        return;
      }

      const [path] = id.split('?', 2);

      let svg;

      try {
        svg = await asyncFs.readFile(path, 'utf-8');
      } catch (ex) {
        return; // File couldn't be loaded, fallback to default loader
      }

      const { code } = compileTemplate({
        id: JSON.stringify(id),
        source: svg,
        filename: path,
        transformAssetUrls: false,
      });

      return `${code}\nexport default { render: render }`;
    },
  };
}
