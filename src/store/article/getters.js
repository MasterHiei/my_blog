export default {
  countArticles: state => {
    return state.articles.length
  },
  getArticles: state => (start, end) => {
    if (start && end) {
      return state.articles.slice(start, end)
    } else {
      return state.articles
    }
  }
}
