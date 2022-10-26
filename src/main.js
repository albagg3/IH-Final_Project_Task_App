import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.scss'
import App from './App.vue'
import router from './router/index'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
