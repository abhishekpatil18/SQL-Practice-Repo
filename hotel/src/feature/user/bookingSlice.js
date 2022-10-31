import { createSlice } from "@reduxjs/toolkit"; 

export const bookingSlice = createSlice({
    name:'BookingSlice',
    initialState:{
        bookedHotel:{}
    },
    reducers:{
        cancleBooking:(state,obj)=>{

        },
        confirmBooking : (state,obj)=>{

        }
    }
})

export const {cancleBooking, confirmBooking} = bookingSlice.actions;

export default bookingSlice.reducer;