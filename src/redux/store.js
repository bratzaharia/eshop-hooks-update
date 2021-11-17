import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cart';
import favoriteReducer from './reducers/favourite';

const rootReducer = combineReducers({
  favourite: favoriteReducer,
  cart: cartReducer
});

const store = createStore(rootReducer)
console.log(store)

export default store;