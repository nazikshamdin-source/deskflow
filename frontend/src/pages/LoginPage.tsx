import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login'
      const res = await api.post(endpoint, { email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Fehler beim Einloggen')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">🎫</span>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">DeskFlow</h1>
          <p className="text-gray-500 mt-1">Ticket-Management-System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="test@mail.de"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Lädt...' : isRegister ? 'Registrieren' : 'Einloggen'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          {isRegister ? 'Bereits ein Account?' : 'Noch kein Account?'}{' '}
          <button onClick={() => setIsRegister(!isRegister)} className="text-blue-600 hover:underline">
            {isRegister ? 'Einloggen' : 'Registrieren'}
          </button>
        </p>
      </div>
    </div>
  )
}
