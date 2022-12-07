import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/ice-cream/iceCreamSlice'
import usersReducer from '../features/user/userSlice'

const reduxLgger = logger
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}).concat(reduxLgger)
})

export default store;