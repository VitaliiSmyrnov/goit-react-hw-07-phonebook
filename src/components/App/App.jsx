import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm, Filter, ContactList } from 'components';
import { Container, Wrapper, Section, Message } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />

        <Section>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <p>Request in progress...</p>}
          {error && (
            <Message>Oops, something went wrong. Reload the page</Message>
          )}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Message>You don't have contacts yet.</Message>
          )}
        </Section>
      </Wrapper>

      <Toaster />
    </Container>
  );
};
