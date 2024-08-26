import ContactListElement from '../contactListElement/ContactListElement';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.search.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};

export default ContactList;

// import PropTypes from 'prop-types';
// import ContactListElement from '../contactListElement/ContactListElement';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(contact => (
//         <ContactListElement
//           key={contact.id}
//           id={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDeleteContact={onDeleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
