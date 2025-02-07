import '@unocss/reset/tailwind.css'
import 'floating-vue/style.css'
import 'uno.css'
import '@renderer/styles/global.css'
import App from '@renderer/App.vue'
import { router } from '@renderer/router'
import pinia from '@renderer/stores'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
