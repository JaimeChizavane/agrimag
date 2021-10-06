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
    component: () => import('../views/News.vue')
  },
  {
    path: '/business',
    name: 'business',
    meta: {
      title: 'Negocios'
    },
    component: () => import('../views/Business.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'Contactos'
    },
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'Acerca'
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/blog-home-01',
    name: '/blog-home-01',
    meta: {
      title: 'Artigo'
    },
    component: () => import('../views/Blog-Home-01.vue')
  },
  {
    path: '/blog-home-02',
    name: '/blog-home-02',
    meta: {
      title: 'Artigo'
    },
    component: () => import('../views/Blog-Home-02.vue')
  },
  {
    path: '/blog-home-03',
    name: '/blog-home-03',
    meta: {
      title: 'Artigo'
    },
    component: () => import('../views/Blog-Home-03.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
