import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm, Filter, ContactList } from 'components';
import { Container, Wrapper, Section } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
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
          <ContactList />
        </Section>
      </Wrapper>

      <Toaster />
    </Container>
  );
};
