import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED'

interface Ticket {
  id: number
  title: string
  description: string
  status: TicketStatus
  createdAt: string
}

const STATUS_LABELS: Record<TicketStatus, string> = {
  OPEN: 'Offen',
  IN_PROGRESS: 'In Bearbeitung',
  RESOLVED: 'Gelöst',
}

const STATUS_COLORS: Record<TicketStatus, string> = {
  OPEN: 'bg-red-100 text-red-700',
  IN_PROGRESS: 'bg-yellow-100 text-yellow-700',
  RESOLVED: 'bg-green-100 text-green-700',
}

export default function DashboardPage() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [filter, setFilter] = useState<TicketStatus | 'ALL'>('ALL')
  const [showForm, setShowForm] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const navigate = useNavigate()

  const loadTickets = async () => {
    const res = await api.get('/api/tickets')
    setTickets(res.data)
  }

  useEffect(() => { loadTickets() }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    await api.post('/api/tickets', { title: newTitle, description: newDesc })
    setNewTitle('')
    setNewDesc('')
    setShowForm(false)
    loadTickets()
  }

  const handleStatusChange = async (id: number, ticket: Ticket, status: TicketStatus) => {
    await api.put(`/api/tickets/${id}`, { ...ticket, status })
    loadTickets()
  }

  const handleDelete = async (id: number) => {
    if (confirm('Ticket wirklich löschen?')) {
      await api.delete(`/api/tickets/${id}`)
      loadTickets()
    }
  }

  const filtered = filter === 'ALL' ? tickets : tickets.filter(t => t.status === filter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎫</span>
          <span className="text-xl font-bold text-gray-800">DeskFlow</span>
        </div>
        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-500 transition">
          Logout
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Alle Tickets</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            + Neues Ticket
          </button>
        </div>

        {/* Neues Ticket Formular */}
        {showForm && (
          <form onSubmit={handleCreate} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
            <h3 className="font-semibold text-gray-700">Neues Ticket erstellen</h3>
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Titel"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
              placeholder="Beschreibung"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Erstellen
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">
                Abbrechen
              </button>
            </div>
          </form>
        )}

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(['ALL', 'OPEN', 'IN_PROGRESS', 'RESOLVED'] as const).map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === s ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400'
              }`}
            >
              {s === 'ALL' ? 'Alle' : STATUS_LABELS[s]}
            </button>
          ))}
        </div>

        {/* Ticket Karten */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">📭</p>
            <p>Keine Tickets vorhanden</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(ticket => (
              <div key={ticket.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug">{ticket.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2 ${STATUS_COLORS[ticket.status]}`}>
                    {STATUS_LABELS[ticket.status]}
                  </span>
                </div>
                {ticket.description && (
                  <p className="text-gray-500 text-sm line-clamp-2">{ticket.description}</p>
                )}
                <p className="text-xs text-gray-400">{new Date(ticket.createdAt).toLocaleDateString('de-DE')}</p>

                {/* Status ändern */}
                <select
                  value={ticket.status}
                  onChange={e => handleStatusChange(ticket.id, ticket, e.target.value as TicketStatus)}
                  className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600"
                >
                  <option value="OPEN">Offen</option>
                  <option value="IN_PROGRESS">In Bearbeitung</option>
                  <option value="RESOLVED">Gelöst</option>
                </select>

                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="text-xs text-red-400 hover:text-red-600 text-left transition"
                >
                  🗑 Löschen
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
