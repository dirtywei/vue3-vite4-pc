import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import unplugin from './unplugin'
import Unocss from 'unocss/vite'

export function createVitePlugins() {
  const plugins = [
    vue(),
    vueJsx(),
    legacy(), // { targets: ['Chrome 64'], modernPolyfills: true }
    ...unplugin,
    Unocss()
  ]

  return plugins
}
