import { useState } from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'

const OrganDonationForm = () => {
  const [details, setDetails] = useState({ donorName: '', organType: '', hospital: '', emergency: '' })

  const handleChange = (key) => (event) => {
    setDetails((prev) => ({ ...prev, [key]: event.target.value }))
  }

  return (
    <form className="space-y-5 rounded-3xl bg-slate-950 p-6">
      <InputField label="Donor Name" value={details.donorName} onChange={handleChange('donorName')} placeholder="Full name" required />
      <InputField label="Organ Type" value={details.organType} onChange={handleChange('organType')} placeholder="Kidney, liver, heart" required />
      <InputField label="Hospital" value={details.hospital} onChange={handleChange('hospital')} placeholder="Hospital name" required />
      <InputField label="Emergency Request" value={details.emergency} onChange={handleChange('emergency')} placeholder="Describe urgency" required />
      <Button type="submit">Submit Organ Support</Button>
    </form>
  )
}

export default OrganDonationForm
