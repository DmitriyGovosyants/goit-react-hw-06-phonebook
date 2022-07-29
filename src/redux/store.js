import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contacts/contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

