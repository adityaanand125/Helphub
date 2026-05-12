import BloodDonationForm from '../components/donation/BloodDonationForm'

const BloodDonation = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Blood Donation Request</h1>
    <p className="mt-3 text-slate-300">Fill in the patient and blood requirements for urgent assistance.</p>
    <div className="mt-8">
      <BloodDonationForm />
    </div>
  </section>
)

export default BloodDonation
