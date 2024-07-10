import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@renderer/styles/style.css'

import pinia from '@renderer/stores'
import { router } from '@renderer/router'
import App from '@renderer/App.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
