import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/scss/main.scss'
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')
