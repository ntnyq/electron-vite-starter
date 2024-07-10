import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import pinia from '@renderer/stores'
import { router } from '@renderer/router'
import App from './App.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
