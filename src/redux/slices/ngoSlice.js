import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ngos: [],
  approvalQueue: [],
}

const ngoSlice = createSlice({
  name: 'ngo',
  initialState,
  reducers: {
    setNGOs(state, action) {
      state.ngos = action.payload
    },
    setApprovalQueue(state, action) {
      state.approvalQueue = action.payload
    },
  },
})

export const { setNGOs, setApprovalQueue } = ngoSlice.actions
export default ngoSlice.reducer
