const ServicesSection = () => (
  <section className="space-y-6">
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-3xl font-semibold text-white">Services</h2>
      <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">Trusted & Verified</span>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        { title: 'Food Donation', description: 'Easy pickup for surplus meals and supplies.' },
        { title: 'Blood Requests', description: 'Emergency blood matches with hospitals.' },
        { title: 'Money Support', description: 'Secure payments for NGO programs.' },
        { title: 'Organ Assistance', description: 'Medical organ support and awareness.' },
      ].map((service) => (
        <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-slate-300">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default ServicesSection
