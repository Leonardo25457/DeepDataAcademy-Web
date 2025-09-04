import type { RouteRecordRaw } from 'vue-router'

const Home          = () => import('../views/Home.vue')
const Courses       = () => import('../views/Courses.vue')
const FreeCourses   = () => import('../views/FreeCourses.vue')
const Webinars      = () => import('../views/Webinars.vue')
const WebinarDetail = () => import('../views/WebinarsDetail.vue')
const Ebooks        = () => import('../views/Ebooks.vue')
const Blog          = () => import('../views/Blog.vue')
const BlogPost      = () => import('../views/BlogPost.vue')
const B2B           = () => import('../views/B2B.vue')
const NotFound      = () => import('../views/NotFound.vue')

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/cursos', name: 'courses', component: Courses },
  { path: '/gratis', name: 'free', component: FreeCourses },
  { path: '/webinars', name: 'webinars', component: Webinars },
  { path: '/webinar/:id', name: 'webinar', component: WebinarDetail },
  { path: '/ebooks', name: 'ebooks', component: Ebooks },
  { path: '/blog', name: 'blog', component: Blog },
  { path: '/blog/:slug', name: 'post', component: BlogPost },
  { path: '/empresas', name: 'b2b', component: B2B },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
] as RouteRecordRaw[]
