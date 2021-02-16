// import { v4 as uuIdv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import types from '../types';

const {
  contacts: { FILTER, ITEMS, ADD, DELETE },
} = types;

export const filter = createAction(FILTER);
export const items = createAction(ITEMS);
export const addItems = createAction(ADD);
export const deleteContact = createAction(DELETE);

// export const filter = value => ({
//   type: FILTER,
//   payload: value,
// });

// export const items = (name, number) => ({
//   type: ITEMS,
//   payload: { id: uuIdv4(), name, number },
// });

// export const addItems = arr => ({
//   type: ADD,
//   payload: arr,
// });

// export const deleteContact = id => ({
//   type: DELETE,
//   payload: id,
// });
