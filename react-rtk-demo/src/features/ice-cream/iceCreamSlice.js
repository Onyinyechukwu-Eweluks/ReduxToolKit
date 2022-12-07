import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'


const initialState = {
  numberOfIcecream: 10
}
const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numberOfIcecream--
    },
    restorked: (state, action) => {
      state.numberOfIcecream += action.payload
    }
  },
  // extraReducers allows createSlice to respond to other action types besides the types it has generated
    // cake/ordered is the action from the cakeSlice
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numberOfIcecream--
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIcecream--
    })
  }
})

//default export reducer
export default icecreamSlice.reducer;
//named export action
export const { ordered, restorked } = icecreamSlice.actions;