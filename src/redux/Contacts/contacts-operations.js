import axios from "axios";
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
} from "./contacts-actions";
axios.defaults.baseURL = " http://localhost:4000";

const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch((error) => dispatch(deleteContactsError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export { addContact, deleteContact, fetchContact };
