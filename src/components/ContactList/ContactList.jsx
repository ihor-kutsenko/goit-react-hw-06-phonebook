import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinLine } from 'react-icons/ri';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch({
      type: 'contacts/deleteContact',
      payload: id,
    });

    const deletedContact = contacts.find(contact => contact.id === id);
    if (deletedContact) {
      toast.warn(
        `${deletedContact.name} was successfully deleted from your contacts`,
        notifyOptions
      );
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.name}>{name}:</span>
            <span className={css.phone}>{number}</span>
            <button
              type="button"
              className={css.button}
              onClick={() => deleteContact(id)}
            >
              <RiDeleteBinLine size="16" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
