import { Link } from 'react-router-dom'

const donateTypes = [
  { label: 'Food Donation', href: '/donate/food' },
  { label: 'Blood Donation', href: '/donate/blood' },
  { label: 'Money Donation', href: '/donate/money' },
  { label: 'Organ Donation', href: '/donate/organ' },
]

const Donate = () => (
  <section className="space-y-8 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <div>
      <h1 className="text-4xl font-semibold text-white">Choose Your Donation</h1>
      <p className="mt-3 text-slate-300">Select the type of support you want to give and complete the fast donation form.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      {donateTypes.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="rounded-3xl border border-slate-700 bg-slate-950 p-6 text-center text-white transition hover:border-orange-500"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </section>
)

export default Donate
