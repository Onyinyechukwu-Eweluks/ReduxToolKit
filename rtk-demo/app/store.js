const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit')
const logger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/ice-cream/iceCreamSlice')
const usersReducer = require('../features/user/userSlice')

const reduxLgger = logger.createLogger()
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLgger)
})

module.exports = store;