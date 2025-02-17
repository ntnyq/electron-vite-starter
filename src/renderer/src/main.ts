import '@unocss/reset/tailwind.css'
import 'floating-vue/style.css'
import 'uno.css'
import './styles/global.css'
import App from './App.vue'
import { router } from './router'
import pinia from './stores'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
