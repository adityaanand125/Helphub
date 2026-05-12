const steps = [
  { title: 'Choose a donation type', description: 'Select food, blood, money, or organ support in seconds.' },
  { title: 'Fill the request form', description: 'Enter donation details and location for pickup.' },
  { title: 'Track it live', description: 'Follow the request until it reaches the NGO.' },
]

const HowItWorks = () => (
  <section className="rounded-3xl bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
    <h2 className="text-3xl font-semibold text-white">How It Works</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {steps.map((step) => (
        <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-slate-300">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default HowItWorks
