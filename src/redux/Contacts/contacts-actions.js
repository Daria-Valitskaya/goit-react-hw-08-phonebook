import { createAction } from "@reduxjs/toolkit";

const onChangeFilter = createAction("contacts/Filter");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactsSuccess = createAction("contacts/deleteContactsSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");

const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");
const fetchContactRequest = createAction("contacts/fetchContactRequest");

export {
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
};
