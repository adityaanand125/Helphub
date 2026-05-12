const StatsSection = () => (
  <section className="grid gap-6 md:grid-cols-3">
    {[
      { label: 'Donations Delivered', value: '12K+' },
      { label: 'Trusted NGOs', value: '300+' },
      { label: 'Live Updates', value: '24/7' },
    ].map((item) => (
      <div key={item.label} className="rounded-3xl bg-slate-950 p-8 text-center shadow-xl shadow-slate-950/40">
        <div className="text-5xl font-extrabold text-orange-500">{item.value}</div>
        <p className="mt-4 text-lg text-slate-300">{item.label}</p>
      </div>
    ))}
  </section>
)

export default StatsSection
