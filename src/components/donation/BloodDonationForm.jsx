import { useState } from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'

const BloodDonationForm = () => {
  const [details, setDetails] = useState({ bloodGroup: '', hospital: '', urgency: '', patientName: '' })

  const handleChange = (key) => (event) => {
    setDetails((prev) => ({ ...prev, [key]: event.target.value }))
  }

  return (
    <form className="space-y-5 rounded-3xl bg-slate-950 p-6">
      <InputField label="Blood Group" value={details.bloodGroup} onChange={handleChange('bloodGroup')} placeholder="O+, A-, B+" required />
      <InputField label="Hospital" value={details.hospital} onChange={handleChange('hospital')} placeholder="Hospital name" required />
      <InputField label="Urgency" value={details.urgency} onChange={handleChange('urgency')} placeholder="Immediate / 24 hours" required />
      <InputField label="Patient Details" value={details.patientName} onChange={handleChange('patientName')} placeholder="Patient name and condition" required />
      <Button type="submit">Submit Blood Request</Button>
    </form>
  )
}

export default BloodDonationForm
