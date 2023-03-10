import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filteredContact } from 'redux/contactsSlice';
import { Wrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(filteredContact(e.target.value));
  };

  return (
    <Wrapper>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </Wrapper>
  );
};
