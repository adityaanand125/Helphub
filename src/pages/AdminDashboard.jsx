const AdminDashboard = () => (
  <section className="space-y-6 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Admin Dashboard</h1>
    <p className="text-slate-300">Manage NGO approvals, review reports, and protect the platform from fake accounts.</p>
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-3xl bg-slate-950 p-6">NGO approval queue</div>
      <div className="rounded-3xl bg-slate-950 p-6">Analytics and reports</div>
      <div className="rounded-3xl bg-slate-950 p-6">User moderation tools</div>
    </div>
  </section>
)

export default AdminDashboard
