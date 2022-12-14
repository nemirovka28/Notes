import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./contacts-operations";
import { updateFilter } from "./contacts-actions";

const items = createReducer([], {
  [getContacts.fulfilled]: ({payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    if (!payload) {
      return state;
    };
      return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, {payload}) => state.filter(({ id }) => id !== payload)
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})

const filter = createReducer('', {
  [updateFilter]: ({ payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  filter,
});