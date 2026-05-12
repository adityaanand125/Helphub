const NotificationCard = ({ title, description, time }) => (
  <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{description}</p>
    <span className="mt-3 block text-sm text-slate-500">{time}</span>
  </div>
)

export default NotificationCard
