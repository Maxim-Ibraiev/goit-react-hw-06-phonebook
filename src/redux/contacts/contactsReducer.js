import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filter, items, addItems, deleteContact } from './contactsActions';

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});
const itemsReducer = createReducer([], {
  [items]: (_, { payload }) => [...payload],
  [addItems]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

export default combineReducers({
  filter: filterReducer,
  items: itemsReducer,
});
