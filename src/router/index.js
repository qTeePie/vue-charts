import { createRouter, createWebHistory } from 'vue-router'
import ChartPage from '../views/Charts.vue'
const routes = [
  {
    path: '/',
    name: 'bar',
    component: ChartPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
