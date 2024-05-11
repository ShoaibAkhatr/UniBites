// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice';
import CustomSlice from './Slices/CustomSlice';
const rootReducer = combineReducers({
  counter: CartSlice,
  custom: CustomSlice,
  // Add other reducers here
});

export default rootReducer;
