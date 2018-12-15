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
const messages = require('./assets/locales/messages.json')
const i18n = new VueI18n({
  locale: 'ja',
  messages: messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  render: h => h(App),
  router
})
