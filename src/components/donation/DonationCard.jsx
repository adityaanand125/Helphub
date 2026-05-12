const DonationCard = ({ title, subtitle, status }) => (
  <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{subtitle}</p>
    <span className="mt-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{status}</span>
  </div>
)

export default DonationCard
