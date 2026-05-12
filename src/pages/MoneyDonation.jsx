import MoneyDonationForm from '../components/donation/MoneyDonationForm'

const MoneyDonation = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Money Donation</h1>
    <p className="mt-3 text-slate-300">Support NGOs and emergency families with secure online contributions.</p>
    <div className="mt-8">
      <MoneyDonationForm />
    </div>
  </section>
)

export default MoneyDonation
