import { createAction } from '@reduxjs/toolkit';

export const filter = createAction('contacts/filter');
export const items = createAction('contacts/items');
export const addItems = createAction('contacts/addItems');
export const deleteContact = createAction('contacts/deleteContact');
