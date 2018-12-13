// Entry JS
import Vue from 'vue'
import App from './App.vue'
import buefy from 'buefy/dist/buefy.css'

Vue.use(buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
