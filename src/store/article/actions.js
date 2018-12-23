import { requestArticles } from 'api/index'

export default {
  requestArticles ({ commit }) {
    requestArticles().then(response => {
      commit('SET_ARTICLES', response.data)
    }).catch(error => {
      console.log(error)
    })
  }
}
