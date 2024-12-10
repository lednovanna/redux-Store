import { configureStore } from '@reduxjs/toolkit';
import item from './itemSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    item,
    cart
  },
})