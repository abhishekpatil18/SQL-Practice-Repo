import { createSlice } from "@reduxjs/toolkit"; 

export const bookTableSlice = createSlice({
    name:'BookTableSlice',
    initialState:{
        bookedHotel:[]
    },
    reducers:{
       addToBookedHotel: (state,obj)=>{
        state.bookedHotel.splice(0,1,obj);
       },
       
    }
})

export const {addToBookedHotel} = bookTableSlice.actions;

export default bookTableSlice.reducer; 