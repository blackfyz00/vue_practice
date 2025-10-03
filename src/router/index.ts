// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/views/PageOne.vue'
import Page2 from '@/views/PageTwo.vue'

const routes = [
  { path: '/', component: Page1, name: 'Page1' },
  { path: '/page2', component: Page2, name: 'Page2' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
