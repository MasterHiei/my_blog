// Entry
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueI18n)
Vue.use(Buefy)

// vue-i18n Configuration
Vue.config.lang = 'ja'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
