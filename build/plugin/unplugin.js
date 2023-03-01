import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// icon配置
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const customIconPath = path.resolve(path.resolve(process.cwd()), 'src/assets/svg-icon')

export default [
  DefineOptions(),
  Components({
    //自动组件
    dirs: ['src/components'],
    resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
    deep: true,
    dts: true
  }),
  AutoImport({
    imports: ['vue', 'vue-router', '@vueuse/core'],
    dts: './auto-import.d.ts'
  }),
  Icons({
    compiler: 'vue3',
    customCollections: {
      ['custom']: FileSystemIconLoader(customIconPath, (svg) =>
        svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
      )
    },
    scale: 1,
    defaultClass: 'inline-block'
  }),
  createSvgIconsPlugin({
    iconDirs: [customIconPath],
    symbolId: 'icon-custom-[dir]-[name]',
    inject: 'body-last',
    customDomId: '__SVG_ICON_CUSTOM__'
  })
]
