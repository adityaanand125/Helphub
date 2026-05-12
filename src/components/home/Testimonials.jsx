const testimonials = [
  { name: 'Priya', feedback: 'HelpHub helped our NGO receive food donations instantly and track pickups live.' },
  { name: 'Rohan', feedback: 'The donation process was fast and the volunteer team stayed connected the whole time.' },
]

const Testimonials = () => (
  <section className="space-y-6">
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-3xl font-semibold text-white">Testimonials</h2>
      <p className="text-slate-400">Hear from donors and NGOs who trust our system.</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <div key={item.name} className="rounded-3xl bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
          <p className="text-slate-300">“{item.feedback}”</p>
          <p className="mt-6 font-semibold text-white">{item.name}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Testimonials
