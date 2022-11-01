import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData : [
        {
            firstName:'Abhishek',
            lastName:'patil',
            userEmail:'abhi@gmail.com',
            userPassword:'abhi',
            contact:'9876543210',
            address:'kupwad',
            city:'sangli',
            state:'MH'
        },
        {
            firstName:'Damodhar',
            lastName:'Jadhav',
            userEmail:'damu@gmail.com',
            userPassword:'damu',
            contact:'9876543210',
            address:'Buldhana',
            city:'Buldhana',
            state:'MH'
        },
        {
            firstName:'Sagar',
            lastName:'sonavne',
            userEmail:'sagar@gmail.com',
            userPassword:'sagar',
            contact:'9876543210',
            address:'ashta',
            city:'sangli',
            state:'MH'
        },
        {
            firstName:'Ruturaj',
            lastName:'Shinde',
            userEmail:'rutu@gmail.com',
            userPassword:'rutu',
            contact:'9800043210',
            address:'sangli',
            city:'sangli',
            state:'MH'
        }
    ],
  },
  reducers: {
    addUser: (state,obj) => {
      state.userData.push(obj.payload)
    },
    removeUser: state => {
    //   state.userData.splice({},1);
    },
    incrementByAmount: (state, action) => {
      state.userData += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, incrementByAmount } = userSlice.actions

export default userSlice.reducer