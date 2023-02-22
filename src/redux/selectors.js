import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;
export const selectContactsList = createSelector(
    [selectContacts,selectFilter],(contacts, filter) => {
  if (filter === '') return contacts;
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
});

