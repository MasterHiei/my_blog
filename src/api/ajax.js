import axios from 'axios'

// const BASE_URL = 'http://localhost:3000/api/v1'
const BASE_URL = '/api'

// GET request
export function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL + url)
      .then(response => {
        console.log(response.data)
        resolve(response.data.data)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
