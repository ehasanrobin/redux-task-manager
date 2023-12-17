import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/api/apiSlice";
import filterSlice from "../features/filterSlice/filterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
