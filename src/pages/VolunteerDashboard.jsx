const VolunteerDashboard = () => (
  <section className="space-y-6 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Volunteer Dashboard</h1>
    <p className="text-slate-300">See volunteer assignments, live tracking, and donation pickup details.</p>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-slate-950 p-6">Volunteer tasks and schedules.</div>
      <div className="rounded-3xl bg-slate-950 p-6">Location and route progress.</div>
    </div>
  </section>
)

export default VolunteerDashboard
