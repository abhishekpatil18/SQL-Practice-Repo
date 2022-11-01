import { createSlice } from "@reduxjs/toolkit";

export const inSessionSlice= createSlice({
    name:'InSessionSlice',
    initialState:{
        inSessionArray:[]
    },
    reducers:{
        addToInSessionArray:(state,obj)=>{
            state.inSessionArray.push(obj.payload)
        },

        removeFromInSessionArray: (state,obj)=>{
            state.inSessionArray.splice(0,1,obj);
        }
    }
})

export const {addToInSessionArray,removeFromInSessionArray} = inSessionSlice.actions
export default inSessionSlice.reducer
