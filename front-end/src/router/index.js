import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Types from '../views/Types'
import Tags from '../views/Tags'
import Login from '../components/Login'
import Blog from '../components/Blog'
import AdminHome from '../views/admin/AdminHome'
import AdminBlog from '../views/admin/AdminBlog'
import AdminTags from '../views/admin/AdminTags'
import AdminTypes from '../views/admin/AdminTypes'
import Welcome from '../components/Welcome'
import BlogNew from '../components/BlogNew'
import BlogUpdate from '../components/BlogUpdate'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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
  },
  {
    path: '/admin/blogs/new',
    name: 'blognew',
    component: BlogNew
  },
  {
    path: '/admin/blogs/update/:id',
    name: 'blogupdate',
    component: BlogUpdate
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/home',
    component: AdminHome,
    children: [
      {
        path: 'blogs',
        name: 'adminblogs',
        component: AdminBlog
      },
      {
        path: 'home',
        component: Welcome
      },
      {
        path: 'types',
        name: 'admintypes',
        component: AdminTypes
      },
      {
        path: 'tags',
        name: 'admintags',
        component: AdminTags
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
