import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Inicio'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      title: 'Noticias'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/business',
    name: 'business',
    meta: {
      title: 'Negocios'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'Contactos'
    },
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
