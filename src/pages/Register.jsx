import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Register', { name, email, password })
  }

  return (
    <section className="mx-auto max-w-xl rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
      <h1 className="text-3xl font-semibold text-white">Register</h1>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-slate-300">Full Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500"
            required
          />
        </label>
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
        <button className="w-full rounded-2xl bg-green-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-green-400">
          Create Account
        </button>
      </form>
    </section>
  )
}

export default Register
