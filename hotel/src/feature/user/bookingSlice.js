import { createSlice } from "@reduxjs/toolkit"; 

export const bookingSlice = createSlice({
    name:'BookingSlice',
    initialState:{
        bookedHotel:[],
        tableCount:[]
    },
    reducers:{ 
        addToBookedHotel:(state,obj)=>{
            state.bookedHotel.push(obj.payload)
        },
        confirmTableCount: (state,obj)=>{
            state.tableCount.push(obj)
        },
        removeFromBookedHotel : (state,obj,index)=>{
            state.bookedHotel.splice(index,1);
        },
        removeFromTableCount : (state,obj,index)=>{
            state.tableCount.push(index,1);
        },
        incrementByBookings: (state, action) => {
            state.bookedHotel += action.payload
          }
    }
})

export const {addToBookedHotel,incrementByBookings,confirmTableCount,removeFromBookedHotel, removeFromTableCount} = bookingSlice.actions;

export default bookingSlice.reducer;