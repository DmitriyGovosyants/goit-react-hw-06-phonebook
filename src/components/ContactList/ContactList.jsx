import { useSelector } from 'react-redux';
import { ContactItem } from 'components';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterContacts.map(({ name, number, id }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
