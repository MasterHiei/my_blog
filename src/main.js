// Entry
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from 'store/index'
import VueI18n from 'vue-i18n'
import fastclick from 'fastclick'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// use libs
Vue.use(VueI18n)
Vue.use(Buefy)

// attach fastclick
fastclick.attach(document.body)

// import fontawesome components
library.add(fab, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// vue-i18n configuration
const initI18n = () => {
  const naviLang = navigator.language || navigator.userLanguage
  const locale = naviLang.startsWith('zh') ? 'zh-CN' : 'ja'
  const messages = require('@/assets/locales/messages.json')
  return new VueI18n({
    locale: locale,
    messages: messages
  })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: initI18n(),
  render: h => h(App),
  router,
  store
})
