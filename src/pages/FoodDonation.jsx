import FoodDonationForm from '../components/donation/FoodDonationForm'

const FoodDonation = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Food Donation</h1>
    <p className="mt-3 text-slate-300">Share the details of your food donation and let nearby NGOs arrange pickup.</p>
    <div className="mt-8">
      <FoodDonationForm />
    </div>
  </section>
)

export default FoodDonation
