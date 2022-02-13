import { App } from 'vue'
import { initVuePlugins } from './initVuePlugins'

import './initGlobalCss'
export const init = (app: App<Element>): void => {
  initVuePlugins(app)
}
