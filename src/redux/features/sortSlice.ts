// sortSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SortState {
    sortOption: string;
}

const initialState: SortState = {
    sortOption: '',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortOption(state, action: PayloadAction<string>) {
            state.sortOption = action.payload;
        },
        clearSortOption(state) {
            state.sortOption = '';
        },
    },
});

export const { setSortOption, clearSortOption } = sortSlice.actions;
export default sortSlice.reducer;
