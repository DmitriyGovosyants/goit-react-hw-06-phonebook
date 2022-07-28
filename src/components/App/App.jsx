import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as contactsActions from 'redux/contacts/contactsActions';
import { Container, ContactForm, Filter, ContactList } from 'components';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import { Section, MainTitle, Title } from './App.styled';

export const App = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer);
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleFilterByName = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Section>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter
          value={filter}
          onChange={e => setFilter(e.currentTarget.value)}
        />
        <ContactList contacts={handleFilterByName()} />
      </Container>
    </Section>
  );
};
