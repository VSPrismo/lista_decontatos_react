import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { addContact, removeContact, editContact } from "./store/actions";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  const handleEditContact = (id) => {
    dispatch(editContact(id));
  };

  return (
    <Container>
      <Title>Lista de Contatos</Title>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onRemoveContact={handleRemoveContact}
        onEditContact={handleEditContact}
      />
    </Container>
  );
};

export default App;
