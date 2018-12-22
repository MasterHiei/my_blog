export default {
  countArticles: state => {
    return state.articles.length
  },
  getArticles: state => {
    return state.articles
  }
}
