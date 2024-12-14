import { createSlice } from "@reduxjs/toolkit";

export const selectedHotelSlice = createSlice({
    name: 'selectedHotelSlice',
    initialState: {
        selectedArray: [
        ],
        selectedTable:[]
    },
    reducers: {
        addToSelectedHotel: (state,obj) => {
            state.selectedArray.splice(0,1,obj.payload) 
        },
        removeFromSelectedHotel:(state,index)=>{
            state.selectedArray.splice(index,1)
        },
        removeFromSelectedTable : (state,index)=>{
            state.selectedTable.splice(index,1)
        }
    }
})

export const { addToSelectedHotel,removeFromSelectedHotel } = selectedHotelSlice.actions;

export default selectedHotelSlice.reducer;