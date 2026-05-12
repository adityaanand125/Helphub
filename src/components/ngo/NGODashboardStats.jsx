const NGODashboardStats = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {[
      { label: 'Active Pickups', value: '18' },
      { label: 'Accepted Requests', value: '42' },
      { label: 'Completed', value: '120' },
    ].map((item) => (
      <div key={item.label} className="rounded-3xl bg-slate-950 p-6 text-center shadow-xl shadow-slate-950/40">
        <div className="text-4xl font-bold text-orange-500">{item.value}</div>
        <p className="mt-3 text-slate-300">{item.label}</p>
      </div>
    ))}
  </div>
)

export default NGODashboardStats
