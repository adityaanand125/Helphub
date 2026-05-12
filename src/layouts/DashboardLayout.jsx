import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'

const DashboardLayout = () => (
  <div className="min-h-screen bg-slate-900 text-slate-100">
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  </div>
)

export default DashboardLayout
