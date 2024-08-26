import { contactsReducer } from './contactsSlice';
import { filterReducer } from '../redux/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

// import { contactsReducer } from './contactsSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { filterReducer } from '../redux/filterSlice';

// const persistConfigContacts = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducerContacts = persistReducer(
//   persistConfigContacts,
//   contactsReducer
// );

// export const reducer = {
//   contacts: persistedReducerContacts,
//   filter: filterReducer,
// };
