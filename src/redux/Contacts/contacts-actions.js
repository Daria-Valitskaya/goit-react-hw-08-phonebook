import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

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

// const addContact = createAction("contacts/Add", (name, number) => ({
//   payload: { id: uuidv4(), name, number },
// }));
