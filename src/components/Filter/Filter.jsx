import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const searchFilter = e => {
    dispatch({
      type: 'filter/filterContact',
      payload: e.currentTarget.value.toLowerCase(),
    });
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
