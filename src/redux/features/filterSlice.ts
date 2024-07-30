import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRange {
    min: number;
    max: number;
}

interface FilterState {
    priceRange: PriceRange;
}

const initialState: FilterState = {
    priceRange: { min: 0, max: 1000 },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPriceRange(state, action: PayloadAction<PriceRange>) {
            state.priceRange = action.payload;
        },
        clearPriceRange(state) {
            state.priceRange = { min: 0, max: 1000 };
        },
    },
});

export const { setPriceRange, clearPriceRange } = filterSlice.actions;
export default filterSlice.reducer;
