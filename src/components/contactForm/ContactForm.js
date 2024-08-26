import React, { useState, useEffect } from 'react';
import css from './css/contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, fetchContacts } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = (name, email, phone) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.email === email)) {
      alert(`${email} is already in contacts.`);
    } else if (contacts.find(contact => contact.phone === phone)) {
      alert(`${phone} is already in contacts.`);
    } else {
      const contact = { name, email, phone };
      // dispatch(addContacts(contact)); так было ранее 15.06.24 в 18.47

      dispatch(addContacts(contact)).then(() => {
        dispatch(fetchContacts()); // Обновляем список контактов после добавления
      });
    }
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    console.log(name);
    console.log(value);
    console.log(name === 'phone');

    if (name === 'phone') {
      setPhone(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setName(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className={css.formStyle} onSubmit={handleSubmit}>
      <label className={css.labelStyle}>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.labelStyle}>
        email
        <input
          className={css.inputName}
          type="email"
          name="email"
          value={email}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The email should look like client@yyyy.yyy"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.labelStyle}>
        Number
        <input
          className={css.inputName}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btnAdd}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './css/contactForm.module.css';

// const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;

//     console.log(name);
//     console.log(value);
//     console.log(name === 'number');

//     if (name === 'number') {
//       setNumber(value);
//     } else {
//       setName(value);
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     onSubmit(name, number);

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.formStyle} onSubmit={handleSubmit}>
//       <label className={css.labelStyle}>
//         Name
//         <input
//           className={css.inputName}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <label className={css.labelStyle}>
//         Number
//         <input
//           className={css.inputName}
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit" className={css.btnAdd}>
//         Add contact
//       </button>
//     </form>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
