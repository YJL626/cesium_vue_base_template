import { createPinia } from 'pinia'
import router from '@/router'
import { App } from 'vue'
export const initVuePlugins = (app: App<Element>): void => {
  app.use(createPinia()).use(router)
}
