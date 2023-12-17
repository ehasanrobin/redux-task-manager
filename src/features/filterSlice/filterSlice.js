import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  search: "",
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    addproject: (state, action) => {
      state.filters.push(action.payload);
    },
    removeproject: (state, action) => {
      const index = state.filters.indexOf(action.payload);
      state.filters.splice(index, 1);
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addproject, removeproject, addSearch } = filterSlice.actions;
