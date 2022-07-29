import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { addContact, deleteContact, filterContacts } from './contactsActions';

const contacts = createReducer( [], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, {payload}) => payload,
})

export const rootReducer = combineReducers({
  contacts,
  filter
})