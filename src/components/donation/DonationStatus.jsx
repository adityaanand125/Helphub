const DonationStatus = ({ status, message }) => (
  <div className="rounded-3xl bg-slate-950 p-5 text-slate-200 shadow-xl shadow-slate-950/30">
    <h3 className="text-lg font-semibold text-white">Current Status</h3>
    <p className="mt-3 text-slate-300">{message}</p>
    <div className="mt-4 inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{status}</div>
  </div>
)

export default DonationStatus
