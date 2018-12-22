import { SET_ARTICLES } from './mutation-types'

export default {
  [SET_ARTICLES] (state, articles) {
    state.articles = articles
  }
}
