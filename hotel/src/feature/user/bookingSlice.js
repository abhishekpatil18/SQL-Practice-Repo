import { createSlice } from "@reduxjs/toolkit"; 

export const bookingSlice = createSlice({
    name:'BookingSlice',
    initialState:{
        bookedHotel:[],
        tableCount:[]
    },
    reducers:{
        cancleBooking:(state,obj)=>{
            
        },
        confirmBooking : (state,obj)=>{
            state.bookedHotel.push(obj);
        },
        confirmTableCount : (state,obj)=>{
            state.tableCount.push(obj);
        },
        incrementByBookings: (state, action) => {
            state.bookedHotel += action.payload
          }
    }
})

export const {cancleBooking,incrementByBookings,confirmTableCount, confirmBooking} = bookingSlice.actions;

export default bookingSlice.reducer;