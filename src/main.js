import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.css'
// importing tailwind
import './assets/tailwind.css'
// importing AOS
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).mount('#app')
