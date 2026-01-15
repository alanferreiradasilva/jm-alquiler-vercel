import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
    },
    {
      path: '/admin/vehicles',
      name: 'admin-vehicles',
      component: () => import('../views/admin/VehiclesView.vue'),
    },
    {
      path: '/admin/contracts',
      name: 'admin-contracts',
      component: () => import('../views/admin/contracts/ContractListView.vue'),
    },
    {
      path: '/admin/reports',
      name: 'admin-reports',
      component: () => import('../views/admin/reports/ReportsListView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
