import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { contactsOperations } from "../../redux/Contacts";
import { getVisibleContacts } from "../../redux/Contacts/contacts-selectors";
import { useEffect } from "react";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, number, name }) => (
        <li key={id} name={name}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
