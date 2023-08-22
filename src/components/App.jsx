import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import MainContainer from './MainContainer/MainContainer';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import './App.module.css';

export default function App() {
  return (
    <MainContainer>
      <Section title="Phonebook">
        <ContactForm />
        <Header title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer />
    </MainContainer>
  );
}
