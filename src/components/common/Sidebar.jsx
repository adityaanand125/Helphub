import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'NGO View', to: '/dashboard/ngo' },
  { label: 'Volunteer', to: '/dashboard/volunteer' },
  { label: 'Track', to: '/track' },
]

const Sidebar = () => (
  <aside className="w-72 border-r border-slate-800 bg-slate-950 p-6">
    <div className="mb-8 text-2xl font-semibold text-white">Dashboard</div>
    <nav className="space-y-3">
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
              isActive ? 'bg-orange-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  </aside>
)

export default Sidebar
