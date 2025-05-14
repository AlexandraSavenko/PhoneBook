import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const filteredContacts = (state) => state.filters.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, filteredContacts],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
