import PropTypes from 'prop-types';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import * as contactsActions from 'redux/contacts/contactsActions';
import { Contact, Info, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      <Info>
        {name}: {number}
      </Info>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(contactsActions.deleteContact(id))}
      >
        <RiDeleteBack2Line size={30} />
      </DeleteBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
