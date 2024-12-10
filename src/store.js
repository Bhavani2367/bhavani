import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from './service/App';
import { thunk } from 'redux-thunk';



export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();  // Fetch products from API

    // Filter the items based on category
    const veg = response.filter(item => item.category === 'veg');
    const nonVeg = response.filter(item => item.category === 'nonVeg');
    console.log('API xxx veg items:', veg);

    // Return the filtered items
    return { veg, nonVeg };
  }
);
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [],
    nonVeg: [],
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.veg = action.payload.veg || [];
        state.nonVeg = action.payload.nonVeg || [];
        console.log('Updated state with veg:', state.veg);
        console.log('Updated state with nonVeg:', state.nonVeg);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory', // Corrected the typo here
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      state.push(action.payload); // Add a new purchase to the history
    },
  },
});

// Cart Slice
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
    clearCart: () => {
      return []; // Clear the cart
    },
  },
});


// Export Actions
export const { addtocart, increment, decrement, removeCart, clearCart } = cartSlice.actions;
export const { addPurchase } = purchaseHistorySlice.actions;
// Configure Store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchaseHistory: purchaseHistorySlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

    
  
});


// Export Store
export default store;
