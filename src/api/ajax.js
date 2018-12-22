import axios from 'axios'

// const BASE_URL = 'http://localhost:3000/api/v1'
const BASE_URL = '/api'

// GET request
export const get = async (url) => {
  return axios.get(BASE_URL + url)
}
