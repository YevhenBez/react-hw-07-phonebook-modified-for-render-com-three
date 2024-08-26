import PropTypes from 'prop-types';
import css from './css/contactListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts, fetchContacts } from '../../redux/operations';

function ContactListElement({ id, name, email, phone }) {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    // dispatch(deleteContacts(contactId));  так было ранее 15.06.24 в 18.50
    dispatch(deleteContacts(contactId)).then(() => {
      dispatch(fetchContacts()); // Обновляем список контактов после удаления
    });
  };

  return (
    <li className={css.liContactList}>
      <p>
        {name}: {phone}, {email}
      </p>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactListElement;

// import PropTypes from 'prop-types';
// import css from './css/contactListElement.module.css';

// function ContactListElement({ id, name, number, onDeleteContact }) {
//   return (
//     <li className={css.liContactList}>
//       <p>
//         {name}: {number}
//       </p>
//       <button
//         className={css.btnDelete}
//         type="button"
//         onClick={() => onDeleteContact(id)}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }

// ContactListElement.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactListElement;
