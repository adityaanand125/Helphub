import { api } from './api'

export const createDonation = async (data) => {
  const response = await api.post('/donations', data)
  return response.data
}

export const getDonations = async (query = '') => {
  const response = await api.get(`/donations${query}`)
  return response.data
}
