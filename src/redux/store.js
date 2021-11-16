import { createStore } from 'redux'
import cartReducer from './reducers/cart';

const store = createStore(cartReducer)
console.log(store)

export default store;