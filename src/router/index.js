// Router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Articles from '../pages/Articles/Articles.vue'

Vue.use(VueRouter)

// Declare All Routers
export default new VueRouter({
  routers: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/articles',
      comments: Articles
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
