import { configureStore, createSlice } from '@reduxjs/toolkit';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { id: 1, name: 'tomato', price: 200.5 },
      { id: 2, name: 'potato', price: 100 },
      { id: 3, name: 'Gobi Manchurian', price: 150 },
    ],
    nonVeg: [
      { id: 4, name: 'chicken', price: 400 },
      { id: 5, name: 'fish', price: 300 },
      { id: 6, name: 'mutton', price: 500 },
    ],
  },
  reducers: {},
});
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const index = state.findIndex(i => i.id === action.payload.id);
          if (index !== -1) state.splice(index, 1);
        }
      }
    },
    removeCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export const { addtocart, increment, decrement, removeCart } = cartSlice.actions;

export default store;