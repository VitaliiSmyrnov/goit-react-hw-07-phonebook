import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { StyledButton, StyledForm } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const isExistName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    const message = `${name} is already in contacts`;

    isExistName ? toast.error(message) : dispatch(addContact({ name, phone }));

    form.reset();
  };

  const nameInputId = nanoid(4);
  const numberInputId = nanoid(4);

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="phone"
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
