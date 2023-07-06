import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from 'redux/contacts/constants';

const filterInitialState = '';

const filterSlice = createSlice({
  name: FILTER,
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
