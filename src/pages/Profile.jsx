import { useAuth } from '../hooks/useAuth'

const Profile = () => {
  const { user } = useAuth()

  return (
    <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
      <h1 className="text-4xl font-semibold text-white">Profile</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Account Info</h2>
          <p className="mt-4 text-slate-300">Name: {user?.name || 'Guest'}</p>
          <p className="mt-2 text-slate-300">Email: {user?.email || 'Not signed in'}</p>
          <p className="mt-2 text-slate-300">Role: {user?.role || 'N/A'}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile
