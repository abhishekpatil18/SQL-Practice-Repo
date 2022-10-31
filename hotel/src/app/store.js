import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice'
import availableHotelReducer from '../feature/user/availableHotelSlice'
import selectedHotelReducer from '../feature/user/selectedHotel'
import bookTableReducer from '../feature/user/bookTable'
import bookingSlice from '../feature/user/bookingSlice'

export default configureStore({
  reducer: {
    user:userReducer,
    availableHotel:availableHotelReducer,
    selectedHotel:selectedHotelReducer,
    BookingSlice:bookingSlice,
    BookTable:bookTableReducer
  }
})