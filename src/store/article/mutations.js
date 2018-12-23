import * as types from './mutation-types'

export default {
  [types.SET_ARTICLES] (state, articles) {
    state.articles = articles
  }
}
