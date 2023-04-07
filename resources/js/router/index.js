import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ClubIndex from '@/pages/clubs/Index.vue'
import ClubAdd from '@/pages/clubs/Add.vue'
import ClubShow from '@/pages/clubs/Show.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/clubs',
    name: 'clubs.index',
    component: ClubIndex
  },
  {
    path: '/clubs/add',
    name: 'clubs.add',
    component: ClubAdd
  },
  {
    path: '/clubs/:id',
    name: 'clubs.show',
    component: ClubShow,
    props: true
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})