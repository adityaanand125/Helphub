import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const DEMO_EMAIL = 'demo@helphub.com'
const DEMO_PASSWORD = 'Demo@123'

const Login = () => {
  const { login, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login({ email, password })
  }

  const fillDemo = () => {
    setEmail(DEMO_EMAIL)
    setPassword(DEMO_PASSWORD)
  }

  return (
    <section className="mx-auto max-w-xl rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <p className="mt-3 text-sm text-slate-400">
        Demo account: <strong>{DEMO_EMAIL}</strong> / <strong>{DEMO_PASSWORD}</strong>
      </p>
      <button
        type="button"
        onClick={fillDemo}
        className="mt-4 rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-orange-500"
      >
        Use demo login
      </button>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-slate-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500"
            required
          />
        </label>
        <label className="block">
          <span className="text-slate-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-orange-400"
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </section>
  )
}

export default Login
