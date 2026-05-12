import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const MainLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 pt-28 pb-6 sm:px-6 lg:px-8">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default MainLayout
