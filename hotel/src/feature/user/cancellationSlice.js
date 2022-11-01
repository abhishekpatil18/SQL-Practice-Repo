import { createSlice } from "@reduxjs/toolkit";

export const cancellationSlice= createSlice({
    name: 'CancellationSlice',
    initialState:{
        canceledArray:[],
        canceledTable:[]
    },
    reducers:{
        addToCanceledArray:(state,obj)=>{
            state.canceledArray.push(obj.payload)
        },

        addToCancledTAble:(state,obj)=>{
            state.canceledTable.push(obj.payload)
        }
    }
})

export const {addToCanceledArray,addToCancledTAble} = cancellationSlice.actions;

export default cancellationSlice.reducer