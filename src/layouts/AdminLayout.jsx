import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'

const AdminLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  </div>
)

export default AdminLayout
