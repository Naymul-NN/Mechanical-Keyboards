// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {  // Ensure this is exported
    items: string[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<string>) {
            state.items.push(action.payload);
        },
        removeProduct(state, action: PayloadAction<string>) {
            state.items = state.items.filter(productId => productId !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
