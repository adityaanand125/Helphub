import { useDonationContext } from '../context/DonationContext'

export const useDonation = () => {
  return useDonationContext()
}
