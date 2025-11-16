import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.nobelprize.org/2.1',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
  }
})

export default api