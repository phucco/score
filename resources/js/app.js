import './bootstrap'
import { createApp } from 'vue'
import router from './router'
import store from './store'
// import BaseLoading from './components/BaseLoading.vue'

createApp({}).use(router).use(store).mount('#app')