const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice');
const { icecreamActions } = require('./features/ice-cream/iceCreamSlice')
const { fetchUsers } = require('./features/user/userSlice')

// store.subscribe used to listen to changes
const unsubscribe = store.subscribe(() => {})

// store.dispatch used to call the actions
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restorked(4));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restorked(4));
store.dispatch(fetchUsers())

unsubscribe();