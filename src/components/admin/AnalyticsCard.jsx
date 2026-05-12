const AnalyticsCard = ({ title, value }) => (
  <div className="rounded-3xl bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-4xl font-bold text-orange-500">{value}</p>
  </div>
)

export default AnalyticsCard
