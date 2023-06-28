import './bootstrap'
import { createApp } from 'vue'
import router from './router'
import BaseLoading from './components/BaseLoading.vue'

createApp({}).component('base-loading', BaseLoading).use(router).mount('#app')