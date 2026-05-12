import { api } from './api'

export const getNGOs = async () => {
  const response = await api.get('/ngos')
  return response.data
}

export const approveNGO = async (ngoId) => {
  const response = await api.post(`/ngos/${ngoId}/approve`)
  return response.data
}
