import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number,
  name: string
}
type initialState = {
  loading: boolean,
  users: User[],
  error: string
}
const initialState: initialState = {
  users: [],
  loading: false,
  error: ''
}

// Generates pending, fufilled and rejected action types
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false,
      state.users = action.payload,
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false,
      state.users = [],
      state.error = action.error.message || 'Error loading this data'
    })
  }
})

export default userSlice.reducer