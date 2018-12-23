// Router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import Articles from 'views/Articles.vue'
import More from 'views/More.vue'

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
      path: '/more',
      component: More
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
