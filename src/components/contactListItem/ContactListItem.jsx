import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';

import {
  ListItem,
  DeleteButton,
} from 'components/contactListItem/ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => (
  <ListItem>
    <div>
      <AiOutlinePhone size={20} /> {name} : {number}
    </div>
    <DeleteButton onClick={() => onDeleteContact(id)}>
      <RiDeleteBinLine size={20} />
    </DeleteButton>
  </ListItem>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
