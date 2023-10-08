import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; // Перевірте, чи правильно вказано шлях до contactsSlice.js



export const ContactListItem = ({ id, name, number, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItemStyled>
      {index + 1}. {name}: {number}
      <DeleteBtnStyled type="button" onClick={handleDelete}>
        Delete
      </DeleteBtnStyled>
    </ContactItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;