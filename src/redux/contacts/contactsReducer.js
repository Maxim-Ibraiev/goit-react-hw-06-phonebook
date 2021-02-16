// import initialState from '../initialState';
// import types from '../types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filter, items, addItems, deleteContact } from './contactsActions';

const filterReducer = createReducer('', {
  [filter]: (state, { payload }) => payload,
});
const itemsReducer = createReducer([], {
  [items]: (state, { payload }) => [...payload],
  [addItems]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

export default combineReducers({
  filter: filterReducer,
  items: itemsReducer,
});

// const {
//   contacts: { FILTER, ITEMS, ADD, DELETE },
// } = types;

// const filter = (state = initialState.contacts.filter, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const items = (state = initialState.contacts.items, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...payload];

//     case ITEMS:
//       return [payload, ...state];

//     case DELETE:
//       return [...state.filter(contact => contact.id !== payload)];

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   filter,
//   items,
// });
