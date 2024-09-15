import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VUE_APP_NETEASE_API_URL,
  timeout: 30000
})
request.interceptors.request.use()
