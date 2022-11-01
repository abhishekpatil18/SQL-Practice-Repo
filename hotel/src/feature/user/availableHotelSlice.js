import { createSlice } from "@reduxjs/toolkit";

export const availableHotelSlice = createSlice({
    name : 'availableHotel',
    initialState:{ 
         availabeHotels : [
            {
              name: 'Hotel_1',
              address: 'Sangli',
              contact: 9730691460
            },
            {
              name: 'Hotel_2',
              address: 'Pune',
              contact: 9700091460
            },
            {
              name: 'Hotel_3',
              address: 'Kolhapure',
              contact: 973000090
            },
            {
              name: 'Hotel_4',
              address: 'Satare',
              contact: 9790691460
            }
          ]
    },
    reducers:{
      addToAvailableHotel: (state,obj)=>{
        state.availabeHotels.push(obj.payload)
      },
      updateAvailableHotel:(state,obj,index)=>{
        state.availabeHotels.splice(index,1,obj.payload)
      }
    }
})

export const {addToAvailableHotel,updateAvailableHotel} = availableHotelSlice.actions

export default availableHotelSlice.reducer