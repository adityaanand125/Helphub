import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import donationReducer from './slices/donationSlice'
import ngoReducer from './slices/ngoSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
    ngo: ngoReducer,
  },
})

export default store
