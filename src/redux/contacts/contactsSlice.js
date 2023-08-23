import { createSlice, nanoid } from '@reduxjs/toolkit';
import defaultContacts from '../../data/contacts';

const taskInitialState = defaultContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: taskInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            ...name,
            ...number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
