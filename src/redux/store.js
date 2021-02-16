// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
