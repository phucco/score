import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '@/pages/Home.vue'
import Login from '@/pages/auth/Login.vue'
import ClubIndex from '@/pages/clubs/Index.vue'
import ClubAdd from '@/pages/clubs/Add.vue'
import ClubShow from '@/pages/clubs/Show.vue'
import ClubEdit from '@/pages/clubs/Edit.vue'
import CourseIndex from '@/pages/courses/Index.vue'
import CourseAdd from '@/pages/courses/Add.vue'
import CourseShow from '@/pages/courses/Show.vue'
import CourseEdit from '@/pages/courses/Edit.vue'
import TournamentIndex from '@/pages/tournaments/Index.vue'
import TournamentAdd from '@/pages/tournaments/Add.vue'
import TournamentShow from '@/pages/tournaments/Show.vue'
import TournamentEdit from '@/pages/tournaments/Edit.vue'
import FormatIndex from '@/pages/formats/Index.vue'
import TiebreakingIndex from '@/pages/tiebreakings/Index.vue'
import DivisionAdd from '@/pages/divisions/Add.vue'
import DivisionEdit from '@/pages/divisions/Edit.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        middleware: 'guest',
        title: 'Login'
      }
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
  {
    path: '/tournaments',
    name: 'tournaments.index',
    component: TournamentIndex
  },
  {
    path: '/tournaments/add',
    name: 'tournaments.add',
    component: TournamentAdd
  },
  {
    path: '/tournaments/:id',
    name: 'tournaments.show',
    component: TournamentShow,
    props: true
  },
  {
    path: '/tournaments/:id/edit',
    name: 'tournaments.edit',
    component: TournamentEdit,
    props: true
  },
  {
    path: '/formats',
    name: 'formats.index',
    component: FormatIndex
  },
  {
    path: '/tiebreakings',
    name: 'tiebreakings.index',
    component: TiebreakingIndex
  },
  {
    path: '/divisions/tournament/:id/add',
    name: 'divisions.add',
    component: DivisionAdd,
    props: true
  },
  {
    path: '/divisions/tournament/:id/edit',
    name: 'divisions.edit',
    component: DivisionEdit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware == 'guest') {
    if (store.state.auth.authenticated) {
      next({ name: 'home' })
    }
    next()
  } else {
    if (store.state.auth.authenticated) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router