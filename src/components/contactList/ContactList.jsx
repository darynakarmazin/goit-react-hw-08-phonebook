import React from 'react';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/contactListItem/ContactListItem';
import {List} from 'components/contactList/ContactList.styled'

export const ContactList = ({ filtredContacts, onDeleteContact }) => (
  <List>
    {filtredContacts.map(contact => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  filtredContacts: PropTypes.array.isRequired,
};




