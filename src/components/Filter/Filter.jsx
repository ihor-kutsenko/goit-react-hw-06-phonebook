import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const searchFilter = e => {
    dispatch(filterContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <label className={css.label}>
      <div className={css.label_wrapper}>
        <BsSearch size="14" /> Find contacts by name
      </div>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={searchFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
