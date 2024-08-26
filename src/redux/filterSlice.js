import { createSlice } from '@reduxjs/toolkit';
const filtersInitial = {
  search: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitial,
  reducers: {
    setFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
