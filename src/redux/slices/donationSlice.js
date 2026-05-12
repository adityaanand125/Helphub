import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  donations: [],
  statusUpdates: [],
}

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setDonations(state, action) {
      state.donations = action.payload
    },
    addDonation(state, action) {
      state.donations.unshift(action.payload)
    },
    updateStatus(state, action) {
      const { id, status } = action.payload
      state.donations = state.donations.map((item) => (item.id === id ? { ...item, status } : item))
      state.statusUpdates.unshift({ id, status, timestamp: new Date().toISOString() })
    },
  },
})

export const { setDonations, addDonation, updateStatus } = donationSlice.actions
export default donationSlice.reducer
