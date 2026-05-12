import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import MainLayout from '../layouts/MainLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import AdminLayout from '../layouts/AdminLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Donate from '../pages/Donate'
import FoodDonation from '../pages/FoodDonation'
import BloodDonation from '../pages/BloodDonation'
import MoneyDonation from '../pages/MoneyDonation'
import OrganDonation from '../pages/OrganDonation'
import Dashboard from '../pages/Dashboard'
import NGOdashboard from '../pages/NGOdashboard'
import VolunteerDashboard from '../pages/VolunteerDashboard'
import AdminDashboard from '../pages/AdminDashboard'
import TrackDonation from '../pages/TrackDonation'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import { ROLE_ADMIN, ROLE_DONOR, ROLE_NGO, ROLE_VOLUNTEER } from '../utils/constants'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/food" element={<FoodDonation />} />
      <Route path="/donate/blood" element={<BloodDonation />} />
      <Route path="/donate/money" element={<MoneyDonation />} />
      <Route path="/donate/organ" element={<OrganDonation />} />
      <Route path="/track" element={<TrackDonation />} />
      <Route path="/profile" element={<Profile />} />
    </Route>

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute allowedRoles={[ROLE_DONOR, ROLE_NGO, ROLE_VOLUNTEER]}>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="ngo" element={<NGOdashboard />} />
      <Route path="volunteer" element={<VolunteerDashboard />} />
    </Route>

    <Route
      path="/admin"
      element={
        <ProtectedRoute allowedRoles={[ROLE_ADMIN]}>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<AdminDashboard />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
