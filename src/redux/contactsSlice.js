import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.arrayInitialContacts = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.arrayInitialContacts.push(payload);
};
const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.arrayInitialContacts.findIndex(
    contact => contact.id === payload.id
  );

  state.arrayInitialContacts.splice(index, 1);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsInitialState = {
  arrayInitialContacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContacts.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContacts.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsInitialState = {
//   arrayInitialContacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   isLoading: false,
//   error: null,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.arrayInitialContacts.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       const index = state.arrayInitialContacts.findIndex(
//         contact => contact.id === action.payload
//       );

//       state.arrayInitialContacts.splice(index, 1);
//     },
//   },
// });

// export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
