import { useState } from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'

const MoneyDonationForm = () => {
  const [details, setDetails] = useState({ amount: '', upiId: '', ngoSupport: '', message: '' })

  const handleChange = (key) => (event) => {
    setDetails((prev) => ({ ...prev, [key]: event.target.value }))
  }

  return (
    <form className="space-y-5 rounded-3xl bg-slate-950 p-6">
      <InputField label="Donate Amount" type="number" value={details.amount} onChange={handleChange('amount')} placeholder="INR 1000" required />
      <InputField label="UPI ID" value={details.upiId} onChange={handleChange('upiId')} placeholder="example@upi" required />
      <InputField label="NGO Support" value={details.ngoSupport} onChange={handleChange('ngoSupport')} placeholder="Preferred NGO" />
      <InputField label="Message" value={details.message} onChange={handleChange('message')} placeholder="Optional note" />
      <Button type="submit">Donate Money</Button>
    </form>
  )
}

export default MoneyDonationForm
