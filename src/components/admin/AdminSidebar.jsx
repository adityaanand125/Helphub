import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Analytics', to: '/admin' },
  { label: 'NGO Approvals', to: '/admin' },
  { label: 'Reports', to: '/admin' },
]

const AdminSidebar = () => (
  <aside className="w-72 border-r border-slate-800 bg-slate-950 p-6">
    <div className="mb-8 text-2xl font-semibold text-white">Admin Panel</div>
    <nav className="space-y-3">
      {links.map((item) => (
        <NavLink
          key={item.label}
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

export default AdminSidebar
