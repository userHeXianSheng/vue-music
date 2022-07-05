import { createRouter, createWebHistory } from 'vue-router'
//  import Home from '../components/Home.vue'
//  import Search from '../components/Search.vue'
//  import SongSheetInfo from '@/components/SongSheetInfo.vue'
//  import MV from '@/components/MV.vue'
//  import SongComment from '@/components/SongComment.vue'
 const Home = () => import('../components/Home.vue')
 const Search = () => import('../components/Search.vue')
 const SongSheetInfo = () => import('@/components/SongSheetInfo.vue')
 const MV = () => import('@/components/MV.vue')
 const SongComment = () => import('@/components/SongComment.vue')

const routes = [
  {path: '/',name: 'home',component: Home},
  {path: '/search',name: 'Search',component: Search},
  {path: '/SongSheetInfo/:id',name: 'SongSheetInfo',component: SongSheetInfo},
  {path: '/MV/:id',name: 'MV',component: MV},
  {path: '/SongComment/:id',name: 'SongComment',component: SongComment},
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
