const NGOApprovalCard = ({ ngoName, summary }) => (
  <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
    <h3 className="text-xl font-semibold text-white">{ngoName}</h3>
    <p className="mt-3 text-slate-300">{summary}</p>
    <div className="mt-5 flex gap-3">
      <button className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">Approve</button>
      <button className="rounded-2xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white">Reject</button>
    </div>
  </div>
)

export default NGOApprovalCard
