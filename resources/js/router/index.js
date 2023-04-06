import { createRouter, createWebHistory } from 'vue-router'
import ClubIndex from '@/pages/clubs/Index.vue'
import ClubAdd from '@/pages/clubs/Add.vue'

const routes = [
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
]

export default createRouter({
  history: createWebHistory(),
  routes
})