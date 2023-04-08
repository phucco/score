import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ClubIndex from '@/pages/clubs/Index.vue'
import ClubAdd from '@/pages/clubs/Add.vue'
import ClubShow from '@/pages/clubs/Show.vue'
import ClubEdit from '@/pages/clubs/Edit.vue'
import CourseIndex from '@/pages/courses/Index.vue'
import CourseAdd from '@/pages/courses/Add.vue'
import CourseShow from '@/pages/courses/Show.vue'
import CourseEdit from '@/pages/courses/Edit.vue'

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
  {
    path: '/clubs/:id/edit',
    name: 'clubs.edit',
    component: ClubEdit,
    props: true
  },
  {
    path: '/courses',
    name: 'courses.index',
    component: CourseIndex
  },
  {
    path: '/courses/add',
    name: 'courses.add',
    component: CourseAdd
  },
  {
    path: '/courses/:id',
    name: 'courses.show',
    component: CourseShow,
    props: true
  },
  {
    path: '/courses/:id/edit',
    name: 'courses.edit',
    component: CourseEdit,
    props: true
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})