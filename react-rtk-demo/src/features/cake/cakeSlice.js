import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numberOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--
    },
    restorked: (state, action) => {
      state.numberOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer;
export const { ordered, restorked } = cakeSlice.actions;