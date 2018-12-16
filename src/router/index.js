// Router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Articles from '../pages/Articles/Articles.vue'

Vue.use(VueRouter)

// Declare all routes
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
