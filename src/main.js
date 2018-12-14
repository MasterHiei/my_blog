// Entry
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
