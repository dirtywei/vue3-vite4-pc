import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import unplugin from './unplugin'
import Unocss from 'unocss/vite'
import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    vueJsx(),
    legacy(), // { targets: ['Chrome 64'], modernPolyfills: true }
    ...unplugin,
    Unocss()
  ]

  if (viteEnv?.VITE_USE_MOCK) {
    plugins.push(configMockPlugin(isBuild))
  }

  return plugins
}
