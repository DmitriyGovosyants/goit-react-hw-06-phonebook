import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactsReducer";

export const store = configureStore({ reducer: {contactReducer}, });

