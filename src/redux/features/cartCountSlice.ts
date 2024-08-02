// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { producPprops } from '../../components/home/Product';

export interface CartState {
  items: producPprops[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cartCount',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<producPprops[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
