import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/style.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
