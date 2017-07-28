import Vue from 'vue'
import axios from 'axios'
import config from '@/config'
import store from '@/store'

const alert = msg => {
  Vue.prototype.$message.error(msg)
}

const handleResponseError = ({ status, data }) => {
  switch (status) {
    case 401:
      Vue.router.replace('/login')
      break
    case 404:
      alert('对不起，资源不存在或已被删除！')
      break
    case 400:
      if (typeof data === 'string') {
        alert(data)
      } else if (typeof data === 'object') {
        for (let name in data) {
          var itemErrors = data[name]
          if (itemErrors.length > 0) {
            alert(itemErrors[0])
            break
          }
        }
      }
      break
    default:
      alert('对不起，服务器出现了故障！')
  }
}

const http = axios.create({
  baseURL: config.apiRoot,
  // timeout: config.timeout,
  headers: { 'Accept': 'application/json' }
})

http.interceptors.request.use(
  config => {
    const token = store.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      handleResponseError(error.response)
      return new Promise(() => { })
    }
    return Promise.reject(error)
  }
)
export default http
