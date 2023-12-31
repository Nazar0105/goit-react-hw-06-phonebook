import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm'; 
import { ContactList } from '../components/ContactList/ContactList'; 
import { Filter } from '../components/Filter/Filter'; 
import { selectContacts } from '../redux/selectors'; 
import styles from './App.module.css'; 

export const App = () => {
  const contacts = useSelector(selectContacts);

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <div className={styles.container}> 
      <h1>Phonebook</h1>
      <ContactForm />
      {total === 0 ? (
        <p>There are no contacts in your phonebook!</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;


