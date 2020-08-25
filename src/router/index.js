import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
<<<<<<< HEAD
    component: () => import( '../views/About.vue')
  },
  {
    path: '/Mai',
    name: 'Mai',
    component: () => import( '../views/Mai.vue')
  }
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Decoration',
    name: 'Decoration',
    component: () => import('../views/Decoration.vue')
  },
>>>>>>> 720116f3d6aeda5ff6ed425e15b15fa980475fff
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
