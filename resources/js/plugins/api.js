import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'

export const API_URL = 'http://score.test/api/'

const api = axios.create({
  baseURL: API_URL
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  store.commit('loading/setLoading', true)
  // NProgress.start()
  return config;
})

api.interceptors.response.use(
  (res) => {
    store.commit('loading/setLoading', false)
    // NProgress.done()
    return res
  },
  (err) => {
    store.commit('loading/setLoading', false)
    // NProgress.done()
    throw err
  }
)

export default api