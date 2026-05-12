import { createContext, useContext, useState } from 'react'

const DonationContext = createContext(null)

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([])
  const [statusUpdates, setStatusUpdates] = useState([])

  const addDonation = (donation) => {
    setDonations((prev) => [donation, ...prev])
  }

  const updateDonationStatus = (donationId, status) => {
    setDonations((prev) => prev.map((item) => (item.id === donationId ? { ...item, status } : item)))
    setStatusUpdates((prev) => [{ donationId, status, timestamp: new Date() }, ...prev])
  }

  return (
    <DonationContext.Provider value={{ donations, statusUpdates, addDonation, updateDonationStatus }}>
      {children}
    </DonationContext.Provider>
  )
}

export const useDonationContext = () => {
  const context = useContext(DonationContext)
  if (!context) {
    throw new Error('useDonationContext must be used within DonationProvider')
  }
  return context
}
