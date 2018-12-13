// Entry
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import buefy from 'buefy/dist/buefy.css'

Vue.use(buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
