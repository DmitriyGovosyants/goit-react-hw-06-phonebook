import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contactsActions';

export const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(el => el.id !== payload),
});