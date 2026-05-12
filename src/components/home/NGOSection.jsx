const NGOSection = () => (
  <section className="rounded-3xl bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-white">NGO Network</h2>
        <p className="mt-3 text-slate-300">A growing community of trusted NGOs, supported by impact tracking and verified donations.</p>
      </div>
      <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">150+ NGOs onboarded</span>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {['Hope Foundation', 'Care Circle', 'Green Aid'].map((ngo) => (
        <div key={ngo} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">{ngo}</h3>
          <p className="mt-2 text-slate-300">Verified NGO with active aid programs and community support.</p>
        </div>
      ))}
    </div>
  </section>
)

export default NGOSection
