import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Timeline from '../views/Timeline.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
