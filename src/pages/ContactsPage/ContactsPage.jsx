import React, { useEffect } from 'react';

import { Header } from '../../components/App.styled';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { Filter } from '../../components/filter/Filter';
import { ContactList } from '../../components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  selectСontacts,
  selectFilter,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectСontacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onAddContact = newcontact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newcontact.name.toLowerCase()
      )
    ) {
      alert(`${newcontact.name} is already in contacts!`);
      return;
    }

    dispatch(addContact(newcontact));
  };

  const changeFilter = event => dispatch(setFilter(event.currentTarget.value));

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtredContacts = getFiltredContacts();

  return (
    <>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList
        filtredContacts={filtredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}
