const NGOdashboard = () => (
  <section className="space-y-6 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">NGO Dashboard</h1>
    <p className="text-slate-300">Monitor nearby donations, active pickups, and accepted requests.</p>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-slate-950 p-6">Nearby donation requests and route updates.</div>
      <div className="rounded-3xl bg-slate-950 p-6">Live map and status summary.</div>
    </div>
  </section>
)

export default NGOdashboard
