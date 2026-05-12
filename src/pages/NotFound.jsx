import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
    <div className="space-y-6 rounded-3xl bg-slate-900 p-10 text-center shadow-xl shadow-slate-800">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-lg text-slate-300">Page not found. Return to the home page.</p>
      <Link to="/" className="inline-flex rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-400">
        Back to Home
      </Link>
    </div>
  </section>
)

export default NotFound
