
import { createSlice } from '@reduxjs/toolkit';

let nextItemId = 1;

const initialState = [];

const CustomSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = { ...action.payload, id: nextItemId++, quantity: 1 };
      state.push(newItem);
    },
    removeItem(state, action) {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        if (item.quantity === 1) {
          return state.filter(item => item.id !== id);
        } else {
          item.quantity--;
        }
      }
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    clearCart(state) {
      return initialState; // Reset the cart to its initial state
    },
  },
});

export const { addItem, removeItem, decreaseQuantity, increaseQuantity,clearCart } = CustomSlice.actions;
export default CustomSlice.reducer;
