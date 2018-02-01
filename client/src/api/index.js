import axios from 'axios'
import toastr from '../common/toastr'

const axiosInstance = axios.create({
  baseURL: 'http://api.dysun95.tk/api',
  timeout: 3000,
  withCredentials: true
})

axiosInstance.interceptors.response.use(response => {
  if (!response.data || response.data.status !== 200) {
    toastr.error(response.data.message)
    return Promise.reject(response.data.message)
  }
  return response
}, err => {
  return Promise.reject(err)
})

export default axiosInstance
