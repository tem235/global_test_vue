import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router'
import App from './App.vue'
import './assets/scss/main.scss'
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
    .use(router)
    .use(createPinia())
    .component('AppLayout', AppLayout)
    .mount('#app')
