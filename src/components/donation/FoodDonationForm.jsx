import { useState } from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'

const FoodDonationForm = () => {
  const [details, setDetails] = useState({ foodType: '', quantity: '', location: '', pickupTime: '' })

  const handleChange = (key) => (event) => {
    setDetails((prev) => ({ ...prev, [key]: event.target.value }))
  }

  return (
    <form className="space-y-5 rounded-3xl bg-slate-950 p-6">
      <InputField label="Food Details" value={details.foodType} onChange={handleChange('foodType')} placeholder="Cooked meals, packaged food" required />
      <InputField label="Quantity" value={details.quantity} onChange={handleChange('quantity')} placeholder="Number of parcels / boxes" required />
      <InputField label="Location" value={details.location} onChange={handleChange('location')} placeholder="Pickup address" required />
      <InputField label="Pickup Timing" type="datetime-local" value={details.pickupTime} onChange={handleChange('pickupTime')} required />
      <Button type="submit">Submit Food Donation</Button>
    </form>
  )
}

export default FoodDonationForm
