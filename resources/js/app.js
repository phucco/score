import '@/bootstrap'
import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import Navbar from '@/components/Navbar.vue'

createApp({}).use(router).use(store).component('Navbar', Navbar).mount('#app')