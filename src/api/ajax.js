import axios from 'axios'

// const BASE_URL = 'http://localhost:3000/api/v1'
const BASE_URL = '/api'

export default {
  get: async (url, data = {}) => {
    let query = []
    Object.keys(data).forEach(key => {
      query.push(key + '=' + data[key])
    })
    if (query.length > 0) {
      url = url + '?' + query.join('&')
    }
    return axios.get(BASE_URL + url)
  },
  post: async (url, data) => {
    return axios.post(url, data)
  }
}
