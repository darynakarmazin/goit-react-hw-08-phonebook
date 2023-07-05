import { addContact, deleteContact, fetchContacts } from "./operations";

export const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
export const arrThunks = [fetchContacts, addContact, deleteContact];
export const createThunksType = type => arrThunks.map(el => el[type]);

export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};
export const handleFulfilledPost = (state, action) => {
  state.items.push(action.payload);
};
export const handleFulfilledDelete = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
