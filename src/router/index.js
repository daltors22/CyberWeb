import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StandardUser from '../views/StandardUser.vue'
import ProUser from '../views/ProUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/standard',
    name: 'StandardUser',
    component: StandardUser
  },
  {
    path: '/pro',
    name: 'ProUser',
    component: ProUser
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
