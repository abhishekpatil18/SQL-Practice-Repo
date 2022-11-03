import { createSlice } from "@reduxjs/toolkit"; 

export const bookTableSlice = createSlice({
    name:'BookTableSlice',
    initialState:{
        bookedHotel:[]
    },
    reducers:{
       addToBookedHotel: (state,obj)=>{
        state.bookedHotel.push(obj.payload);
       },
       
    }
})

export const {addToBookedHotel} = bookTableSlice.actions;

export default bookTableSlice.reducer; 