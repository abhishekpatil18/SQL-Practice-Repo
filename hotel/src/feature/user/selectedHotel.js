import { createSlice } from "@reduxjs/toolkit";

export const selectedHotelSlice = createSlice({
    name: 'selectedHotelSlice',
    initialState: {
        selectedArray: [
        ]
    },
    reducers: {
        addToSelectedHotel: (state,obj) => {
            state.selectedArray.push(obj)
        }
    }
})

export const { addToSelectedHotel } = selectedHotelSlice.actions;

export default selectedHotelSlice.reducer;