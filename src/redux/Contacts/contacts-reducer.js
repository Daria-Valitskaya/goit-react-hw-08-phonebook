import { combineReducers } from "redux";
// import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContact } from "./contacts-operations";
import {
  addContactRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsSuccess,
  deleteContactRequest,
  deleteContactsError,
  fetchContactRequest,
  fetchContactsSuccess,
  fetchContactsError,
  onChangeFilter,
} from "./contacts-actions";
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, action) => [...state, action.payload],
  [deleteContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
const filter = createReducer("", {
  [onChangeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactsError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactsError]: () => false,
  [fetchContactsSuccess]: () => false,
});
export default combineReducers({
  items,
  filter,
  loading,
});
