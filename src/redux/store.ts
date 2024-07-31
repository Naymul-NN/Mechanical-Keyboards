import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/api'
import searchReducer from "./features/searchSlice";
import filterReducer from "./features/filterSlice";
import sortReducer from "./features/sortSlice";
import cartReducer from "./features/cartSlice"
export const store = configureStore({
 
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
        search: searchReducer,
        filter: filterReducer,
        sort: sortReducer,
        cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch