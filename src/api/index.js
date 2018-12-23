import ajax from './ajax'
import { CODE_OK } from './config'

const URL_ARTICLES = '/articles'

// Get all articles
export const requestArticles = async (data = {}) => {
  return new Promise((resolve, reject) => {
    ajax.get(URL_ARTICLES, data).then(response => {
      console.log('API Success(requestArticles):\n', response)
      let data = response.data
      if (data.code === CODE_OK) {
        resolve(data.data)
      } else {
        reject(data.code)
      }
    }).catch(error => {
      console.log('API Error(requestArticles):\n ', error)
      // TODO: HTTP Error Handler
      reject(error)
    })
  })
}
