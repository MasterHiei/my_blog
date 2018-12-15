// Entry
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueI18n)
Vue.use(Buefy)

// import fontawesome icon
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// vue-i18n Configuration
const naviLang = navigator.language || navigator.userLanguage
const lang = naviLang.startsWith('zh') ? 'zh-CN' : 'ja'
const messages = require('./assets/locales/messages.json')
const i18n = new VueI18n({
  locale: lang,
  messages: messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  render: h => h(App),
  router
})
