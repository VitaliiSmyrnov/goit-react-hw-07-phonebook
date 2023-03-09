import { useSelector } from 'react-redux';
import { ContactItem } from 'components';
import { selectVisibleContacts } from 'redux/selectors';
import { StyledItem, StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <StyledList>
      {contacts.map(contact => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
