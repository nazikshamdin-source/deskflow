import axios from 'axios'

const api = axios.create({ baseURL: '/' })

// Token automatisch bei jedem Request mitsenden
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
