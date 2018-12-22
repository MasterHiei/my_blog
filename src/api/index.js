import { get } from './ajax'

const URL_ARTICLES = '/articles'

// Get all articles
export const requestArticles = async () => {
  return new Promise((resolve, reject) => {
    get(URL_ARTICLES).then(response => {
      console.log('API Success(requestArticles):\n', response.data)
      resolve(response.data)
    }).catch(error => {
      console.log('API Error(requestArticles):\n ', error)
      reject(error)
    })
  })
}
