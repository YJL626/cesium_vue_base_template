import { createApp } from 'vue'
import App from './App.vue'

import { init } from '@/bootstrap'
const app = createApp(App)
init(app)
app.mount('#app')
