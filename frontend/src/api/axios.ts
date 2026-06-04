import axios from 'axios'

// Lokal: '/' (Vite Proxy leitet weiter)
// Produktion: Railway Backend URL
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/' })

// Token automatisch bei jedem Request mitsenden
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
