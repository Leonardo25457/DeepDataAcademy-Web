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

const SQLMastery = () => import("../views/cursos/SQLMastery.vue");
const FrontendMastery = () => import("../views/cursos/FrontendMastery.vue");
const AzureFundamentals = () => import("../views/cursos/AzureFundamentals.vue");
const PythonDataScience = () => import("../views/cursos/PythonDataScience.vue");
const LinuxAdmin = () => import("../views/cursos/LinuxAdmin.vue");

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

  { path: "/cursos/SQLMastery", name: "sql-mastery", component: SQLMastery },
  { path: "/cursos/FrontendMastery", name: "frontend-mastery", component: FrontendMastery },
  { path: "/cursos/AzureFundamentals", name: "azure-fundamentals", component: AzureFundamentals },
  { path: "/cursos/PythonDataScience", name: "python-data-science", component: PythonDataScience },
  { path: "/cursos/LinuxAdmin", name: "linux-admin", component: LinuxAdmin },

  { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
] as RouteRecordRaw[]
