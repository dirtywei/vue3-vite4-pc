import 'uno.css'
import '@/styles/css/global.css'
import '@/styles/scss/global.scss'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

async function setupApp() {
  const app = createApp(App)
  setupStore(app) //pinia
  await setupRouter(app)
  app.mount('#app') // mount app
}
setupApp()
