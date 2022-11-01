import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice'
import availableHotelReducer from '../feature/user/availableHotelSlice'
import selectedHotelReducer from '../feature/user/selectedHotel'
import bookTableReducer from '../feature/user/bookTable'
import bookingSlice from '../feature/user/bookingSlice'
import cancellationSliceReducer from '../feature/user/cancellationSlice'
import inSessionReducer from '../feature/admin/inSession';
export default configureStore({
  reducer: {
    user:userReducer,
    availableHotel:availableHotelReducer,
    selectedHotel:selectedHotelReducer,
    BookingSlice:bookingSlice,
    BookTable:bookTableReducer,
    CancellationSlice:cancellationSliceReducer,
    InSessionSlice:inSessionReducer,
  }
})