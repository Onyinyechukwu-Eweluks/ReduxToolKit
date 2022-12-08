import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  numberOfCakes: number
}
const initialState: initialState = {
  numberOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--
    },
    restorked: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer;
export const { ordered, restorked } = cakeSlice.actions;