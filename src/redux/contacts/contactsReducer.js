// import defaultContacts from '../../data/contacts';

// const initialState = {
//   contacts: defaultContacts,
// };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contacts => contacts.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };
