import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { CONTACTS } from 'redux/contacts/constants';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  STATUS,
  createThunksType,
  handleFulfilled,
  handleFulfilledDelete,
  handleFulfilledGet,
  handleFulfilledPost,
  handlePending,
  handleRejected,
} from './sliceFunction';

const contactsSlice = createSlice({
  name: CONTACTS,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledPost)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAllOf(...createThunksType(PENDING)), handlePending)
      .addMatcher(isAllOf(...createThunksType(FULFILLED)), handleFulfilled)
      .addMatcher(isAllOf(...createThunksType(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
