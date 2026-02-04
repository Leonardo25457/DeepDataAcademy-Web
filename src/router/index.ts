import type { RouteRecordRaw } from 'vue-router'

const Home          = () => import('../views/Home.vue')
const FreeCourses   = () => import('../views/FreeCourses.vue')
const Bootcamps      = () => import('../views/Bootcamps.vue')
const Ebooks        = () => import('../views/Ebooks.vue')
const Blog          = () => import('../views/Blog.vue')
const BlogPost      = () => import('../views/BlogPost.vue')
const B2B           = () => import('../views/B2B.vue')
const NotFound      = () => import('../views/NotFound.vue')
const About         = () => import('../views/About.vue')

const SQLMastery = () => import("../views/cursos/SQLMastery.vue");
const FrontendMastery = () => import("../views/cursos/FrontendMastery.vue");
const AzureFundamentals = () => import("../views/cursos/AzureFundamentals.vue");
const PythonDataScience = () => import("../views/cursos/PythonDataScience.vue");
const LinuxAdmin = () => import("../views/cursos/LinuxAdmin.vue");

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/gratis', name: 'free', component: FreeCourses },
  { path: '/bootcamps', name: 'bootcamps', component: Bootcamps },
  { path: '/ebooks', name: 'ebooks', component: Ebooks },
  { path: '/blog', name: 'blog', component: Blog },
  { path: '/blog/:slug', name: 'post', component: BlogPost },
  { path: '/empresas', name: 'b2b', component: B2B },
  { path: '/nosotros', name: 'about', component: About },

  { path: "/cursos/SQLMastery", name: "sql-mastery", component: SQLMastery },
  { path: "/cursos/FrontendMastery", name: "frontend-mastery", component: FrontendMastery },
  { path: "/cursos/AzureFundamentals", name: "azure-fundamentals", component: AzureFundamentals },
  { path: "/cursos/PythonDataScience", name: "python-data-science", component: PythonDataScience },
  { path: "/cursos/LinuxAdmin", name: "linux-admin", component: LinuxAdmin },

  { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
] as RouteRecordRaw[]
