const Dashboard = () => (
  <section className="space-y-6 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Donor Dashboard</h1>
    <p className="text-slate-300">View your active donations, pickup status, and recent updates from NGOs.</p>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-slate-950 p-6">Your donation summary will show here.</div>
      <div className="rounded-3xl bg-slate-950 p-6">Track ongoing support and notifications.</div>
    </div>
  </section>
)

export default Dashboard
