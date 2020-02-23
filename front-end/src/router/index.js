import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Types from '../views/Types'
import Tags from '../views/Tags'
import Login from '../components/Login'
import Blog from '../components/Blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/types',
    name: 'Types',
    component: Types
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: Blog
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
