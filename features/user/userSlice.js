const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const fetch = require('node-fetch')


const initialState = {
  users: [],
  loading: false,
  error: ''
}

// Generates pending, fufilled and rejected action types
const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data.map(user => user.id)
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false,
      state.users = action.payload,
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false,
      state.users = [],
      state.error = action.error.message
    })
  }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers