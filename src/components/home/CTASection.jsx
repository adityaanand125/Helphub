import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="rounded-3xl bg-gradient-to-r from-orange-500 to-emerald-500 p-8 text-slate-950 shadow-xl shadow-orange-500/20">
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="text-3xl font-semibold">Ready to make an impact?</h2>
        <p className="mt-3 text-slate-900/90">Start a donation, support an NGO, or join live tracking today.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link to="/donate" className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">Donate Now</Link>
        <Link to="/login" className="rounded-2xl border border-slate-950 px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white">Login</Link>
      </div>
    </div>
  </section>
)

export default CTASection
