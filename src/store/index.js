import Vue from 'vue'
import Vuex from 'vuex'
import article from './article/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    article
  }
})
