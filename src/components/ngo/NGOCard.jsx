const NGOCard = ({ name, description, badge }) => (
  <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      {badge && <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">Verified</span>}
    </div>
    <p className="mt-3 text-slate-300">{description}</p>
  </div>
)

export default NGOCard
