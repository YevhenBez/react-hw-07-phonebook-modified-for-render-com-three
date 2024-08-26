import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';

const App = () => {
  const isLoadingApp = useSelector(selectIsLoading);

  console.log(`Проверка isLoading ${isLoadingApp}`);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoadingApp && <Loader message="Loading. Apologies, I am using a free service for my backend, so there may be a slight delay. Thank you for your patience."/>}
        <ContactList />
      </div>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './Filter/Filter';

// const App = () => {
//   const [initialContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [contacts, setContacts] = useState(
//     () => JSON.parse(localStorage.getItem('contactsLclStrg')) ?? initialContacts
//   );

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contactsLclStrg', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts.`);
//     } else if (contacts.find(contact => contact.number === number)) {
//       alert(`${number} is already in contacts.`);
//     } else {
//       setContacts([contact, ...contacts]);
//     }
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {/* React homework template */}
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={deleteContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
