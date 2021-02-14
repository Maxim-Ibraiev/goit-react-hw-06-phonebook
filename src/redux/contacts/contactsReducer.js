import { combineReducers } from 'redux';
import initialState from '../initialState';
import types from '../types';

const {
  contacts: { FILTER, ITEMS, ADD, DELETE },
} = types;

const filter = (state = initialState.contacts.filter, { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

const items = (state = initialState.contacts.items, { type, payload }) => {
  switch (type) {
    case ADD:
      return [...payload];

    case ITEMS:
      return [payload, ...state];

    case DELETE:
      return [...state.filter(contact => contact.id !== payload)];

    default:
      return state;
  }
};

export default combineReducers({
  filter,
  items,
});
