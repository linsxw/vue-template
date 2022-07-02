import axios from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_API,
  timeout: +import.meta.env.VITE_REQUEST__TIMEOUT,
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  },
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code !== 200) {
      switch (data.code) {
        case 401:
          // 认证失败、token过期
          break
        case 500:
          // 服务器错误
          break
      }
      return Promise.reject(data)
    }
    else {
      return response.data
    }
  },
  (err) => {
    // 网络错误 登出用户
    return Promise.reject(err || 'Error')
  },
)

export default instance
