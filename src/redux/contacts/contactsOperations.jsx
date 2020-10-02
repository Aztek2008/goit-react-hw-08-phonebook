import axios from "axios";
import contactsActions from "../contacts/contactsActions";

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", contact) // DO WE NEED {} IN DISPATCH SUCCESS
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) =>
      dispatch(contactsActions.fetchContactsError(error.message))
    );
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
