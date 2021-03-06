import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(Router)
app.use(createPinia())

app.mount('#app')
