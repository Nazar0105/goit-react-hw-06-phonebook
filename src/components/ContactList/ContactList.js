import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors'; 
import { deleteContact } from '../../redux/contactsSlice'; 
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContact();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact, index) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}
          <button
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
