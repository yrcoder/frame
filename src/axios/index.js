import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http = axios

axios.defaults.headers.post['Content-Type']
    = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error))

// 响应拦截器
axios.interceptors.request.use(
    response => response,
    error => Promise.reject(error)
)

export default axios
