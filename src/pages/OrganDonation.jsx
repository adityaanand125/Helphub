import OrganDonationForm from '../components/donation/OrganDonationForm'

const OrganDonation = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Organ Donation Support</h1>
    <p className="mt-3 text-slate-300">Register organ support and emergency requests with medical details.</p>
    <div className="mt-8">
      <OrganDonationForm />
    </div>
  </section>
)

export default OrganDonation
